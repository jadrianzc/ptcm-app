import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { db } from '@/db/dbconfig';

export default NextAuth({
	providers: [
		Credentials({
			name: 'Custom Login',
			credentials: {
				email: {
					label: 'Correo',
					type: 'email',
					placeholder: 'Correo',
				},
				password: {
					label: 'Contraseña',
					type: 'password',
					placeholder: 'Contraseña',
				},
			},
			authorize: async (credentials: any) => {
				try {
					// comprobacion en api (?)
					const user = await db
						.select('*')
						.from('ViewAtletas')
						.where('email', credentials.email);

					if (user.length === 0) return null;

					if (!bcrypt.compareSync(credentials.password, user[0]!.password)) return null;

					delete user[0]!.password;

					return user[0];
				} catch (error: any) {
					console.log(error);
					throw new Error(error.response.data.error);
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
	callbacks: {
		async jwt({ token, account, user }) {
			if (account) {
				token.accessToken = account.access_token;
				token.user = user;
			}

			return token;
		},

		async session({ session, token }) {
			session.user = token.user as any;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET as string,
	debug: false,
	session: {
		maxAge: 86400, /// cada 24h
		strategy: 'jwt',
		updateAge: 43200, // cada 12h
	},
});

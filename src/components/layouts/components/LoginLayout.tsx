import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { IWrapperComponent } from '../interfaces';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const LoginLayout: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<>
			<Head>
				<title>PTCM - Login</title>
				<meta name="description" content="Login Padel Training Club Manta" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`w-full min-h-screen bg-darkblue text-white ${poppins.className}`}>
				{children}
			</main>
		</>
	);
};

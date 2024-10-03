import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { IUser } from './store/auth/interfaces';

export async function middleware(req: NextRequest) {
	const urlPath = req.nextUrl.pathname;
	const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	if (!!session) {
		if (urlPath.startsWith('/login')) {
			return NextResponse.redirect(new URL(`/`, req.url));
		}

		if (
			((session.user as IUser).idRol === 1 || (session.user as IUser).idRol === 2) &&
			!urlPath.startsWith('/admin')
		) {
			return NextResponse.redirect(new URL(`/admin`, req.url));
		}

		if ((session.user as IUser).idRol === 3 && urlPath.startsWith('/admin')) {
			return NextResponse.redirect(new URL(`/`, req.url));
		}
	} else {
		if (!urlPath.startsWith('/login')) {
			const callbackUrl = encodeURIComponent(
				`${process.env.NEXTAUTH_URL}${req.nextUrl.pathname}`,
			);
			return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, req.url));
			// return NextResponse.redirect(new URL(`/login`, req.url));
		}
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

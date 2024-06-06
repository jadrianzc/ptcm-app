import { ReactElement } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import { LoginLayout } from '@/components/layouts';
import { Login } from '@/components/auth';

export const LoginPage: NextPageWithLayout = () => {
	return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
	return <LoginLayout>{page}</LoginLayout>;
};

export default LoginPage;

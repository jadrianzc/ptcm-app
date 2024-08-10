import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { LoginLayout } from '@/components/layouts';
import { Login } from '@/components/login';

const LoginPage: NextPageWithLayout = () => {
	return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
	return <LoginLayout>{page}</LoginLayout>;
};

export default LoginPage;

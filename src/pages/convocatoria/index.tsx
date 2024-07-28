import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '@/components/layouts';
import { Home } from '@/components/home';

const ConvocatoriaPage: NextPageWithLayout = () => {
	return <Home />;
};

ConvocatoriaPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default ConvocatoriaPage;

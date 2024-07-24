import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { MainLayout } from '@/components/layouts';
import { Tables } from '@/components/tables';

const HomePage: NextPageWithLayout = () => {
	return <Tables />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

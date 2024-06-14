import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { MainLayout } from '@/components/layouts';

const HomePage: NextPageWithLayout = () => {
	return <div className={`flex flex-col items-center justify-between`}>Hola</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

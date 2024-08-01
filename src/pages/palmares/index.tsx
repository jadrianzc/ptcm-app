import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '@/components/layouts';
import { Palmares } from '@/components/palmares';

const PalmaresPage: NextPageWithLayout = () => {
	return <Palmares />;
};

PalmaresPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default PalmaresPage;

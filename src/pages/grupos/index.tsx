import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '@/components/layouts';
import { Groups } from '@/components/groups';

const GruposPage: NextPageWithLayout = () => {
	return <Groups />;
};

GruposPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default GruposPage;

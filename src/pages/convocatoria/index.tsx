import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '@/components/layouts';
import { Announcement } from '@/components/announcement';

const ConvocatoriaPage: NextPageWithLayout = () => {
	return <Announcement />;
};

ConvocatoriaPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default ConvocatoriaPage;

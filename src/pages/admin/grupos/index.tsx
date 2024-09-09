import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/components/layouts';
import { Group } from '@/components/admin/grupos';

const GruopAdminPage: NextPageWithLayout = () => {
	return <Group />;
};

GruopAdminPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default GruopAdminPage;

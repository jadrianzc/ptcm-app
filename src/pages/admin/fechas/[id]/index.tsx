import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/components/layouts';
import { SingleMatch } from '@/components/admin/fechas';

const AdminPage: NextPageWithLayout = () => {
	return <SingleMatch />;
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default AdminPage;

import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '@/components/layouts';
import { Members } from '@/components/admin/members';

const AdminPage: NextPageWithLayout = () => {
	return <Members />;
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default AdminPage;

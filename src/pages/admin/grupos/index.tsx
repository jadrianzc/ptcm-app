import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout, MatchdayLayout } from '@/components/layouts';
import { Group } from '@/components/admin/grupos';

const GruopAdminPage: NextPageWithLayout = () => {
	return <Group />;
};

GruopAdminPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout>
			<MatchdayLayout>{page}</MatchdayLayout>
		</MainLayout>
	);
};

export default GruopAdminPage;

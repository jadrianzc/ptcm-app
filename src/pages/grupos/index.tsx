import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout, MatchdayLayout } from '@/components/layouts';
import { Groups } from '@/components/groups';

const GruposPage: NextPageWithLayout = () => {
	return <Groups />;
};

GruposPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout>
			<MatchdayLayout>{page}</MatchdayLayout>
		</MainLayout>
	);
};

export default GruposPage;

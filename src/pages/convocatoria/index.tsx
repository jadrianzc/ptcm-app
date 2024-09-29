import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout, MatchdayLayout } from '@/components/layouts';
import { Announcement } from '@/components/announcement';

const ConvocatoriaPage: NextPageWithLayout = () => {
	return <Announcement />;
};

ConvocatoriaPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout>
			<MatchdayLayout>{page}</MatchdayLayout>
		</MainLayout>
	);
};

export default ConvocatoriaPage;

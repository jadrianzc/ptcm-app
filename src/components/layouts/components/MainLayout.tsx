import { useEffect } from 'react';
import { Spin, message } from 'antd';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { Poppins } from 'next/font/google';
import { IWrapperComponent } from '../interfaces';
import { IUser } from '@/store/auth/interfaces';
import { useStoreLoading, useStoreMessage, useStoreAuth } from '@/store';

import { Footer } from '@/components/global/components';
import { Menu } from '@/components/menu';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const MainLayout: React.FC<IWrapperComponent> = ({ children }) => {
	const { data, status } = useSession();
	const { login } = useStoreAuth();
	const { loading } = useStoreLoading();
	const { setMessageApi } = useStoreMessage();
	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		const newUser = data?.user as IUser;

		if (status === 'authenticated') {
			login(newUser);
		}
	}, [status, data, login]);

	useEffect(() => {
		setMessageApi(messageApi);
	}, [messageApi, setMessageApi]);

	return (
		<>
			<Head>
				<title>PTCM</title>
				<meta name="description" content="Padel Training Club Manta" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`w-full min-h-screen ${poppins.className}`}>
				{contextHolder}

				<Spin spinning={loading} fullscreen size="large" />

				<Menu>
					{children}
					<Footer />
				</Menu>
			</main>
		</>
	);
};

import { useEffect } from 'react';
import { ConfigProvider, Spin, message } from 'antd';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { Raleway } from 'next/font/google';
import { IWrapperComponent } from '../interfaces';
import { IUser } from '@/store/auth/interfaces';
import { Menu } from '@/components/ui';
import { useStoreLoading, useStoreMessage, useStoreAuth } from '@/store';

const raleway = Raleway({ subsets: ['latin'] });

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
				<title>Órdenes de compras</title>
				<meta name="description" content="Generador de órdenes de comrpas" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`w-full h-auto ${raleway.className}`}>
				<ConfigProvider
					theme={{
						token: {
							fontFamily: 'Raleway, Roboto, Helvetica, sans-serif',
						},
					}}
				>
					{contextHolder}

					<Spin spinning={loading} fullscreen size="large" />

					<Menu>{children}</Menu>
				</ConfigProvider>
			</main>
		</>
	);
};

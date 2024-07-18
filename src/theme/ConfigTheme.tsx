import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { IWrapperComponent } from '@/components/layouts/interfaces';

export const ConfigTheme: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<ConfigProvider
			locale={esES}
			theme={{
				token: {
					fontFamily: 'Raleway, Roboto, Helvetica, sans-serif',
				},
				components: {
					Menu: {},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

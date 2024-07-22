import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { IWrapperComponent } from '@/components/layouts/interfaces';

export const ConfigTheme: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<ConfigProvider
			locale={esES}
			theme={{
				token: {
					fontFamily: 'Poppins, sans-serif',
					colorPrimary: '#146586',
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

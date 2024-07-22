import { FC } from 'react';
import { Button, ConfigProvider } from 'antd';
import { ButtonCustomProps } from '../interfaces';

export const ButtonCustom: FC<ButtonCustomProps> = ({ children, color, className, ...props }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color ?? '#1890ff',
				},
			}}
		>
			<Button
				className={`${className} flex justify-center items-center text-3xl font-black italic shadow-none`}
				{...props}
			>
				{children}
			</Button>
		</ConfigProvider>
	);
};

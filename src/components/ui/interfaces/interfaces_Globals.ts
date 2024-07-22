import { ButtonProps } from 'antd';

export interface ButtonCustomProps extends ButtonProps {
	color?: string;
	children?: React.ReactNode;
}

import { Logo, UserIcon } from '@/icons';
import { Badge, Divider } from 'antd';
import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

export const HeaderMenu = () => {
	return (
		<div className="h-[57px] flex justify-center items-center px-5 md:px-12">
			<div className="flex-grow">
				<Logo />
			</div>

			<div className="flex justify-center items-center">
				<div className="p-2">
					<Badge color="#146586" size="small" count={5}>
						<IoNotificationsOutline className="w-6 h-6" />
					</Badge>
				</div>
				<Divider type="vertical" />
				<div className="p-2 flex justify-center items-center space-x-4">
					<UserIcon />
					<span className="text-gray font-medium">Iniciar Sesión</span>
				</div>
			</div>
		</div>
	);
};

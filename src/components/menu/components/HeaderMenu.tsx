import { Logo, UserIcon } from '@/icons';
import { Badge, Divider } from 'antd';
import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

export const HeaderMenu = () => {
	return (
		<div className="h-[57px] flex justify-center items-center px-5 md:px-12">
			<div className="flex-grow">
				<Logo className="" />
			</div>

			<div className="flex justify-center items-center">
				<div className="p-1 lg:p-2">
					<Badge color="#146586" size="small" count={5}>
						<IoNotificationsOutline className="w-6 h-6" />
					</Badge>
				</div>
				<Divider type="vertical" />
				<div className="p-1 flex justify-center items-center space-x-2 lg:p-2 lg:space-x-4">
					<UserIcon className="w-8 h-8 lg:w-10 lg:h-10" />
					<span className="text-xs text-gray font-medium lg:text-base">
						Iniciar Sesión
					</span>
				</div>
			</div>
		</div>
	);
};

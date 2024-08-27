import { ButtonCustom } from '@/components/ui/components';
import { Logo, UserIcon } from '@/icons';
import { useStoreAuth } from '@/store';
import { Badge, Divider, Popover } from 'antd';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

export const HeaderMenu = () => {
	const { user } = useStoreAuth();

	const onLogout = () => {
		signOut({ callbackUrl: '/login' });
	};

	const content = (
		<div>
			<ButtonCustom
				type="primary"
				ghost
				color="#146586"
				className="text-base font-medium not-italic"
				icon={<MdLogout />}
				onClick={onLogout}
			>
				Cerrar sesión
			</ButtonCustom>
		</div>
	);

	return (
		<div className="h-[57px] flex justify-center items-center px-5 md:px-12">
			<div className="flex-grow">
				<Logo />
			</div>

			<div className="flex justify-center items-center">
				<div className="p-1 md:p-2">
					<Badge color="#146586" size="small" count={5}>
						<IoNotificationsOutline className="w-6 h-6" />
					</Badge>
				</div>
				<Divider type="vertical" />
				<div className="p-1 flex justify-center items-center space-x-2 md:p-2 md:space-x-4">
					<UserIcon className="w-8 h-8 md:w-10 md:h-10" />
					{user ? (
						<Popover content={content}>
							<div className="text-sm text-gray font-medium cursor-pointer md:text-base">
								{user.name}
							</div>
						</Popover>
					) : (
						<Link href="/login" className="text-sm text-gray font-medium md:text-base">
							Iniciar Sesión
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

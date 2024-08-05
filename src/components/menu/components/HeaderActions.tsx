import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Actions } from './';
import { IWrapperComponent } from '@/components/layouts/interfaces';
import { menuItems } from '../helpers';
import { useRouter } from 'next/router';

export const HeaderActions: React.FC<IWrapperComponent> = ({ children }) => {
	const router = useRouter();

	const title = menuItems.find((menu) => menu.key === router.pathname);

	return (
		<div className="flex-grow overflow-y-auto bg-content space-y-5 px-5 py-9 lg:px-[58px] lg:py-[45px]">
			<Breadcrumb
				className="hidden justify-start text-sm lg:flex"
				items={[
					{
						title: (
							<Link href={`/`} className="!h-full !flex items-center gap-2 !p-2">
								<span className="text-main">Padel Training Club Manta</span>
							</Link>
						),
					},
					{
						title: <span className="text-gray">{title?.label}</span>,
					},
				]}
			/>

			<Actions />

			{children}
		</div>
	);
};

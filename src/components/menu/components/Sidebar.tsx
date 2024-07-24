import React from 'react';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { BiBarChartAlt2 } from 'react-icons/bi';

import type { MenuProps } from 'antd';
import { Badge, Breadcrumb, Divider, Image, Menu } from 'antd';
import { IWrapperComponent } from '@/components/layouts/interfaces';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Dashboard, Icon, Logo, PadelIcon, UserIcon } from '@/icons';
import Link from 'next/link';
import { Actions } from './Actions';
import SvgDashboard from '@/icons/SvgDashboard';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
	{ key: '1', icon: <SvgDashboard className="w-8 h-8" />, label: 'Option 1' },
	{ key: '2', icon: <SvgDashboard className="w-8 h-8" />, label: 'Option 2' },
	{ key: '3', icon: <BiBarChartAlt2 className="!text-white" />, label: 'Option 3' },
	{
		key: 'sub1',
		label: 'Navigation One',
		icon: <BiBarChartAlt2 className="text-white w-8 h-8" />,
		children: [
			{ key: '5', label: 'Option 5' },
			{ key: '6', label: 'Option 6' },
			{ key: '7', label: 'Option 7' },
			{ key: '8', label: 'Option 8' },
		],
	},
	{
		key: 'sub2',
		label: 'Navigation Two',
		icon: <BiBarChartAlt2 className="text-white" />,
		children: [
			{ key: '9', label: 'Option 9' },
			{ key: '10', label: 'Option 10' },
			{
				key: 'sub3',
				label: 'Submenu',
				children: [
					{ key: '11', label: 'Option 11' },
					{ key: '12', label: 'Option 12' },
				],
			},
		],
	},
];

export const Sidebar: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<>
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

			<div className="w-full flex h-[calc(100vh-57px)]">
				<div className="bg-blue flex-shrink-0">
					<div className="flex justify-center items-centers py-4">
						<Icon />
					</div>
					<Menu
						// defaultSelectedKeys={['1']}
						mode="inline"
						inlineCollapsed={true}
						items={items}
					/>
				</div>

				<div className="flex-grow overflow-y-auto bg-content px-[68px] py-[45px]">
					<Breadcrumb
						className="flex justify-start text-sm"
						items={[
							{
								title: (
									<Link
										href={`/${items[items.length - 2]}`}
										className="!h-full !flex items-center gap-2 !p-2"
									>
										<span className="text-main">Padel Training Club Manta</span>
									</Link>
								),
							},
							{
								title: <span className="text-gray">Portada</span>,
							},
						]}
					/>

					<Actions />
					{children}
				</div>
			</div>
		</>
	);
};

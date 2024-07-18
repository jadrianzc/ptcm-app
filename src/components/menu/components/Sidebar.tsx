import React from 'react';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { BiBarChartAlt2 } from 'react-icons/bi';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IWrapperComponent } from '@/components/layouts/interfaces';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
	{ key: '1', icon: <TbDeviceDesktopAnalytics className="text-white" />, label: 'Option 1' },
	{ key: '2', icon: <BiBarChartAlt2 className="text-white" />, label: 'Option 2' },
	{ key: '3', icon: <BiBarChartAlt2 className="text-white" />, label: 'Option 3' },
	{
		key: 'sub1',
		label: 'Navigation One',
		icon: <BiBarChartAlt2 className="text-white" />,
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
			<div className="h-[57px]">MENU</div>

			<div className="w-full flex h-[calc(100vh-57px)]">
				<div className="bg-menu flex-shrink-0">
					<div>HOLA</div>`
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						inlineCollapsed={true}
						items={items}
					/>
				</div>

				<div className="flex-grow overflow-y-auto">{children}</div>
			</div>
		</>
	);
};

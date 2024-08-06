import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Tooltip } from 'antd';
import { IoMenuOutline } from 'react-icons/io5';

import { Content } from './';
import { menuItems } from '../helpers';
import { IWrapperComponent } from '@/components/layouts/interfaces';
import { Icon, IconWhite } from '@/icons';

export const Sidebar: React.FC<IWrapperComponent> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className="w-full flex flex-col h-[calc(100vh-57px)] md:flex-row">
			<div className="bg-blue flex-shrink-0 w-[70px] hidden md:block">
				<div className="flex justify-center items-centers py-4">
					<Icon />
				</div>

				<div>
					{menuItems.map((item, index) => (
						<Tooltip
							key={item.label}
							className={`w-full flex justify-center items-center h-[72px] ${
								index % 2 === 0 ? 'bg-[#0E5373]' : 'bg-[#146586]'
							}`}
							placement="left"
							title={item.label}
							arrow={false}
							color={`${index % 2 === 0 ? '#0E5373' : '#146586'}`}
							overlayClassName="tooltip-content"
							overlayStyle={{ left: '70px', height: '72px' }}
							overlayInnerStyle={{
								borderRadius: '0px',
								fontSize: '16px',
								fontWeight: '600',
								width: '150px',
								height: '100%',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
							}}
						>
							<Link href={item.key}>{item.icon}</Link>
						</Tooltip>
					))}
				</div>
			</div>

			<div className="bg-blue text-white h-[60px] flex justify-start items-center md:hidden">
				<div
					className="h-full px-4 py-5 flex justify-center items-center border-r-2"
					onClick={showDrawer}
				>
					<IoMenuOutline className="w-8 h-8" />
				</div>

				<div className="h-full px-4 py-5 flex justify-start items-center space-x-5">
					<div className="flex justify-center items-centers">
						<IconWhite />
					</div>
					<div>Padel Training Club Manta</div>
				</div>
			</div>

			<Drawer
				title="Basic Drawer"
				placement="left"
				closable={true}
				onClose={onClose}
				open={open}
				key="left"
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>

			<Content>{children}</Content>
		</div>
	);
};

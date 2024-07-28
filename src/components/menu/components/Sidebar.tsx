import React from 'react';
import { Tooltip } from 'antd';

import { HeaderActions } from './';
import { menuItems } from '../helpers';
import { IWrapperComponent } from '@/components/layouts/interfaces';
import { Icon } from '@/icons';
import Link from 'next/link';

export const Sidebar: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<div className="w-full flex h-[calc(100vh-57px)]">
			<div className="bg-blue flex-shrink-0 w-20">
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
							overlayStyle={{ left: '80px', height: '72px' }}
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

			<HeaderActions>{children}</HeaderActions>
		</div>
	);
};

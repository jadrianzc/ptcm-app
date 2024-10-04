import Link from 'next/link';
import { Drawer } from 'antd';
import { Logo } from '@/icons';
import { useStoreAuth, useStoreModal } from '@/store';
import { menuItems, menuItemsAdmin } from '../helpers';

export const DrawerMenu = () => {
	const { user } = useStoreAuth();
	const { isDrawer, setIsDrawer } = useStoreModal();

	const onClose = () => setIsDrawer(false);

	return (
		<Drawer
			title={
				<div className="w-full flex justify-center items-center">
					<Logo />
				</div>
			}
			placement="left"
			closable={false}
			onClose={onClose}
			open={isDrawer}
			key="left"
		>
			{(user?.idRol === 3 ? menuItems : menuItemsAdmin).map((item, index) => (
				<Link
					key={item.label}
					href={item.key}
					onClick={onClose}
					className={`w-full text-white flex justify-start items-center space-x-4 px-5 py-4 ${
						index % 2 === 0 ? 'bg-[#0E5373]' : 'bg-[#146586]'
					}`}
				>
					<span>{item.icon}</span>
					<span>{item.label}</span>
				</Link>
			))}
		</Drawer>
	);
};

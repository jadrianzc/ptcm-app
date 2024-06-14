import { useStoreUI } from '@/store';
import { Drawer } from 'antd';
import { HeaderMenu, MenuItems } from '../components';
import { UserProfile } from '@/components/user_profile';

export const DrawerMenu = () => {
	const { isDrawer, closeDrawer, typeDrawer } = useStoreUI();

	return (
		<Drawer
			title={<HeaderMenu />}
			placement='top'
			closable={false}
			onClose={closeDrawer}
			open={isDrawer}
			getContainer={false}>
			{typeDrawer === 1 ? <MenuItems /> : <UserProfile />}
		</Drawer>
	);
};

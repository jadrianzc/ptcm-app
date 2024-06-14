import { DrawerMenu, HeaderMenu } from '../components';

export const Menu = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DrawerMenu />

			<HeaderMenu />

			{/* Content */}
			<div className={`h-auto`}>
				<div className='p-5'>{children}</div>
			</div>
		</>
	);
};

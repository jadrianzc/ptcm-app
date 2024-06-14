import Link from 'next/link';
import { itemsMenus } from './sidebarItems';
import { useStoreUI } from '@/store';

export const MenuItems = () => {
	const { closeDrawer } = useStoreUI();

	return (
		<div className={`h-full grid grid-flow-col justify-items-center bg-[#565656] p-5`}>
			{itemsMenus.map(({ description, path, icon }) => (
				<Link
					href={path}
					key={path}
					onClick={closeDrawer}
					className='flex justify-center items-center flex-col text-white'>
					<div className='w-[80px] h-[80px] border-red-400 border-4 rounded-full flex justify-center items-center flex-col p-2'>
						{icon}
					</div>

					<span className='text-center font-semibold'>{description}</span>
				</Link>
			))}
		</div>
	);
};

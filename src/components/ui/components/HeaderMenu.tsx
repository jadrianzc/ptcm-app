import { Image } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { useStoreUI } from '@/store';

export const HeaderMenu = () => {
	const { toggleDrawer, changeTypeDrawer } = useStoreUI();

	const handleToggleDrawer = (type: number) => {
		changeTypeDrawer(type);

		toggleDrawer();
	};

	return (
		<div className="bg-dark select-none text-white">
			<div className="flex justify-center items-center py-5 space-x-5">
				{/* <Image
					src='/cf-logo.png'
					alt='Logo CableFamilia'
					className='!w-[120px] !h-[60px]'
					preview={false}
				/> */}

				{/* <Image
						src='/otv-logo.png'
						alt='Logo OromarTV'
						className='!w-[130px] !h-[60px]'
						preview={false}
					/> */}
			</div>

			<div className={'w-full h-16 flex justify-between items-center px-5'}>
				<div>
					<AiOutlineMenu className="w-6 h-6" onClick={() => handleToggleDrawer(1)} />
				</div>

				<div>
					<p className="text-lg">Menú</p>
				</div>

				<div>
					<IoSettingsSharp className="w-6 h-6" onClick={() => handleToggleDrawer(2)} />
				</div>
			</div>
		</div>
	);
};

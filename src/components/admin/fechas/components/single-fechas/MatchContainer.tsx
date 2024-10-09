import { FC } from 'react';
import { ViewPartidos } from '@/components/announcement/interfaces';
import { ButtonCustom } from '@/components/ui/components';

interface IGroupItem {
	idMatch: string;
	matches: ViewPartidos[];
}

export const MatchContainer: FC<IGroupItem> = ({ idMatch, matches }) => {
	console.log(matches);
	const saveResultMatch = async () => {
		console.log(idMatch);
		console.log(matches);
	};

	return (
		<div className='bg-white rounded-md p-[18px] space-y-5'>
			{matches.map((match, index) => (
				<div key={index} className='space-y-2'>
					<span className='text-base font-medium'>{match.name}</span>
					<div className='w-full flex justify-between items-center'>
						<div className='flex bg-[#E9F0F4] w-[220px]'>
							{/* <div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match..map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div> */}
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
						</div>

						<div className='font-bold italic text-base'>VS</div>

						<div className='flex bg-[#E9F0F4] w-[220px]'>
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
							{/* <div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match.right.map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div> */}
						</div>
					</div>
				</div>
			))}

			<div className='flex justify-center items-center !mt-10'>
				<ButtonCustom
					color='#43849E'
					className='not-italic font-medium text-lg border-[#43849E] text-turquoise'
					onClick={saveResultMatch}>
					Guardar
				</ButtonCustom>
			</div>
		</div>
	);
};

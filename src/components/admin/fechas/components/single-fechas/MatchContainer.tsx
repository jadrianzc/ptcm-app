import { FC } from 'react';
import { IMatches } from '@/components/announcement/interfaces';

interface IGroupItem {
	matches: IMatches[];
}

export const MatchContainer: FC<IGroupItem> = ({ matches }) => {
	return (
		<div className='bg-white rounded-md p-[18px] space-y-5'>
			{matches.map((match, index) => (
				<div key={index} className='space-y-2'>
					<span className='text-base font-medium'>Partido {index + 1}</span>
					<div className='w-full flex justify-between items-center'>
						<div className='flex bg-[#E9F0F4] w-[220px]'>
							<div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match.left.map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div>
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
						</div>

						<div className='font-bold italic text-base'>VS</div>

						<div className='flex bg-[#E9F0F4] w-[220px]'>
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
							<div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match.right.map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

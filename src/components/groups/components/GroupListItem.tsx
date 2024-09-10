import { FC } from 'react';
import { PtcmLetter } from '@/icons';
import { IGroupItems } from '@/components/announcement/interfaces';

interface IGroupItem {
	group: IGroupItems[];
	index: number;
}

export const GroupListItem: FC<IGroupItem> = ({ group, index }) => {
	return (
		<div className='bg-white w-[490px] rounded-md p-[18px] space-y-2'>
			<div className='w-full flex justify-center items-center relative'>
				<div className='rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]'>
					<div className='text-white italic font-extrabold text-sm md:text-3xl mr-1'>
						{index + 1}
					</div>
				</div>
			</div>

			<div className='text-sm text-gray2 font-medium text-center md:text-left'>
				Cancha {index + 1} (Produbanco)
			</div>

			<div className='grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0'>
				<div className='bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full'>
					<PtcmLetter className='h-[80px] rotate-90 md:h-auto md:rotate-0' />
				</div>
				{group?.map((player, numPlayer) => (
					<div
						key={player?.id}
						className={`bg-darkblue h-[137px] ${
							numPlayer === 0 || numPlayer === 1
								? 'border-b-4 border-dashed border-white md:border-b-0 md:border-r-4'
								: ''
						} text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base`}>
						<span>Jugador {numPlayer + 1}</span>
						<span>{player?.fullname}</span>
					</div>
				))}
				<div className='bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full'>
					<PtcmLetter className='h-[80px] rotate-90 md:h-auto md:rotate-180' />
				</div>
			</div>
		</div>
	);
};

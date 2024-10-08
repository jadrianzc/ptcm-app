import { Dispatch, FC, SetStateAction } from 'react';
import { PtcmLetter } from '@/icons';
import { IGroupItems, IGroups } from '@/components/announcement/interfaces';
import { useStoreAuth, useStoreSummoned } from '@/store';
import { localApi } from '@/axios';
import { dayjs } from '@/libs';
import { useRouter } from 'next/router';

interface IGroupItem {
	group: IGroups;
	index: number;
	firstDataPlayer: IDataPlayer[];
	setFirstDataPlayer: Dispatch<SetStateAction<IDataPlayer[]>>;
}

interface IDataPlayer {
	index: number;
	numPlayer: number;
	player: IGroupItems;
}

export const GroupListItem: FC<IGroupItem> = ({
	group,
	index,
	firstDataPlayer,
	setFirstDataPlayer,
}) => {
	const { user } = useStoreAuth();
	const router = useRouter();
	const { convocationDates, groups, setGroups } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	const handleSelectPlayer = async ({ index, numPlayer, player }: IDataPlayer) => {
		if (
			user?.idRol === 2 &&
			now.isBefore(convocationDates?.groupDate) &&
			router.pathname.includes('/admin/grupos')
		) {
			if (firstDataPlayer.length === 0) {
				setFirstDataPlayer((state) => [...state, { index, numPlayer, player }]);
				return;
			}
			if (firstDataPlayer.length === 1) {
				// Obtener el primer jugador
				const firstPlayer = firstDataPlayer[0];
				const secondPlayer = { index, numPlayer, player };

				// Crear una copia de los grupos
				// const updatedGroups = [...groups];
				const updatedGroups = groups.map((item) => item.groups as IGroupItems[]);

				// Verificar si los índices son válidos
				if (
					updatedGroups[firstPlayer.index] &&
					updatedGroups[secondPlayer.index] &&
					updatedGroups[firstPlayer.index][firstPlayer.numPlayer] &&
					updatedGroups[secondPlayer.index][secondPlayer.numPlayer]
				) {
					// Intercambiar las posiciones
					const temp = updatedGroups[firstPlayer.index][firstPlayer.numPlayer];
					updatedGroups[firstPlayer.index][firstPlayer.numPlayer] =
						updatedGroups[secondPlayer.index][secondPlayer.numPlayer];
					updatedGroups[secondPlayer.index][secondPlayer.numPlayer] = temp;

					// Actualizar los grupos con los elementos intercambiados
					const newGroups = updatedGroups.map((item, index) => ({
						...groups[index],
						groups: item,
					}));

					setGroups(newGroups);

					try {
						await localApi.put('/announcement/updateGroups', newGroups);
					} catch (error) {
						console.log(error);
					}
				} else {
					console.error('Los índices son inválidos');
				}
				// Resetear el estado de `firstDataPlayer`
				setFirstDataPlayer([]);
			}
		}
	};

	return (
		<div className='bg-white rounded-md p-[18px] space-y-2'>
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
				<div className='bg-turquoise w-[62px] h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full'>
					<PtcmLetter className='h-[80px] rotate-90 md:h-auto md:rotate-0' />
				</div>
				{(group.groups as IGroupItems[])?.map((player, numPlayer) => (
					<div
						key={player?.id}
						className={`bg-darkblue w-[180px] h-[137px] ${
							numPlayer === 0 || numPlayer === 1
								? 'border-b-4 border-dashed border-white md:border-b-0 md:border-r-4'
								: ''
						} text-white font-bold italic flex flex-col justify-center items-center gap-2 !text-sm cursor-pointer md:text-base`}
						onClick={() => handleSelectPlayer({ index, numPlayer, player })}>
						{router.pathname.includes('/admin/grupos') && (
							<span>Jugador {numPlayer + 1}</span>
						)}
						<span>{player?.fullname}</span>
					</div>
				))}
				<div className='bg-turquoise w-[62px] h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full'>
					<PtcmLetter className='h-[80px] rotate-90 md:h-auto md:rotate-180' />
				</div>
			</div>
		</div>
	);
};

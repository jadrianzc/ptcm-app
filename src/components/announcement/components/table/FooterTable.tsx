import { useRouter } from 'next/router';

import { dayjs } from '@/libs';
import { ButtonCustom } from '@/components/ui/components';
import { useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { useDateMatchday } from '@/hooks';
import { IGroupItems, IMatches } from '../../interfaces';
import { localApi } from '@/axios';

export const FooterTable = () => {
	const { pathname } = useRouter();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { currentDay, groups } = useStoreSummoned();
	const { createGroups, generateMatches, handleLeaveMatch, handleJoinMatch } = useDateMatchday();

	const createMatchesForGroup = async () => {
		try {
			setLoading(true);

			const matchesCreate = groups.map(({ id, groups }) => {
				const matches: IMatches[] = generateMatches(groups as IGroupItems[]);

				return {
					idGroup: id,
					matches,
				};
			});

			console.log(matchesCreate);

			const { data } = await localApi.put('/announcement/updateGroupMatches', matchesCreate);

			console.log(data);
		} catch (error) {
			console.log(error);
			message?.error('Ocurrió un error al crear los partidos.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='hidden md:flex flex-col gap-6 md:flex-row'>
			{pathname.includes('/admin') ? (
				<div className='flex flex-wrap gap-2'>
					<ButtonCustom
						type='primary'
						className='w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first'
						color='#3F6380'
						onClick={createGroups}
						disabled={groups.length > 0}>
						Crear grupos
					</ButtonCustom>

					{/* TODO: CUANDO LA FASE DE CREACIÓN DE GRUPOS FINALICE MOSTRAR BOTÓN PARA CREAR LOS PARTIDOS */}
					{groups.length > 0 && (
						<ButtonCustom
							type='primary'
							className='w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first'
							color='#3F6380'
							onClick={createMatchesForGroup}>
							Generar partidos
						</ButtonCustom>
					)}
				</div>
			) : (
				<>
					{dayjs().isBefore(currentDay?.startAt.split('Z')[0]) && (
						<div className='flex flex-wrap gap-2'>
							<ButtonCustom
								type='primary'
								className='w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first'
								color='#D14747'
								onClick={handleLeaveMatch}>
								Bajarme
							</ButtonCustom>

							<ButtonCustom
								type='primary'
								className='w-full md:w-[328px] h-[57px] rounded-md'
								color='#609D56'
								onClick={handleJoinMatch}>
								Unirme
							</ButtonCustom>
						</div>
					)}

					<div className='flex flex-col text-sm justify-center'>
						<span className='w-fit text-gray3 border-gray3 md:border-b'>
							Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
							multa.
						</span>
						<span className='w-fit text-gray4 border-gray4 md:border-b'>
							Se agotó el tiempo para bajarte de la convocatoria sin multa. A partir
							de este momento la multa es la siguiente: --------
						</span>
					</div>
				</>
			)}
		</div>
	);
};

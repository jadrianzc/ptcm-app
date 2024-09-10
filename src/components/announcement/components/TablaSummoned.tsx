import React, { FC } from 'react';
import { Divider } from 'antd';
import dayjs from 'dayjs';

import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { ButtonCustom } from '@/components/ui/components';
import { localApi } from '@/axios';
import { useDateMatchday } from '@/hooks';

interface IProps {
	handleJoinMatch?: () => void;
}

export const TablaSummoned: FC<IProps> = ({ handleJoinMatch }) => {
	// useDateMatchday();
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { summoned, currentDay, setSummoned } = useStoreSummoned();

	const handleLeaveMatch = async () => {
		try {
			setLoading(true);

			const athlete = summoned.find(({ idAthlete }) => user?.id === idAthlete);

			console.log(athlete);
			const { data: respSummoned } = await localApi.delete('/announcement/deleteSummoned', {
				data: athlete,
			});

			message?.success(respSummoned.message);

			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{currentDay && (
				<>
					<div className='w-full h-auto bg-white rounded-xl px-5 py-6 space-y-5 shadow-sm'>
						<div className='content-convocatoria'>
							<span className='text-sm text-gray2 font-medium'>
								Convocatoria de hoy
							</span>
							<Divider type='vertical' />
							<span className='text-sm text-gray2 font-medium'>
								Liga Cñor Marisco
							</span>
							<Divider type='vertical' />
							<span className='text-sm text-gray2 font-medium'>
								{currentDay?.name}
							</span>
							<Divider type='vertical' />
							<span className='text-sm text-gray4 md:text-gray2 font-medium'>
								{dayjs(currentDay?.startAt)
									.utcOffset(0, false)
									.format('dddd DD MMMM, HH:mm a')
									.charAt(0)
									.toUpperCase() +
									dayjs(currentDay?.startAt)
										.utcOffset(0, false)
										.format('dddd DD MMMM, HH:mm a')
										.slice(1)}
							</span>
						</div>

						{summoned.length > 0 && (
							<>
								<div className='flex flex-col md:flex-row md:flex-wrap md:gap-5 2xl:gap-0'>
									<div className='w-auto h-full grid grid-cols-1 md:grid-rows-12 lg:grid-rows-10 xl:grid-rows-6 md:grid-flow-col gap-x-5'>
										{summoned
											.filter((row) => row.type === 'titular')
											.map((convocado, index) => (
												<div
													key={index}
													className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
														(index + 1) % 2 === 0
															? 'bg-tableContent'
															: ''
													}`}>
													<span className='text-gray4'>{index + 1}</span>
													<span className='text-blue'>
														{convocado?.fullname}
													</span>
												</div>
											))}
									</div>
									<div className='w-full bg-tableContent my-3 border border-y-0 border-b-[3px] border-b-blue md:w-[26px] md:my-0 md:mx-3 md:border-r-[3px] md:border-r-blue md:border-b-0'></div>
									<div className='w-auto h-full grid grid-cols-1 md:grid-rows-6 md:grid-flow-col gap-x-5'>
										<div className={`border-b-2`}>
											<span className='text-blue text-base font-bold italic'>
												Suplentes
											</span>
										</div>
										{summoned
											.filter((row) => row.type === 'suplente')
											.map((convocado, index) => (
												<div
													key={index}
													className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
														(index + 1) % 2 === 0
															? 'bg-tableContent'
															: ''
													}`}>
													<span className='text-gray4'>{index + 1}</span>
													<span className='text-blue'>
														{convocado?.fullname}
													</span>
												</div>
											))}
									</div>
									<div className='w-full bg-tableContent my-3 border border-y-0 border-b-[3px] border-b-blue md:w-[26px] md:my-0 md:mx-3 md:border-r-[3px] md:border-r-blue md:border-b-0'></div>
									<div className='w-auto h-full grid grid-cols-1 md:grid-rows-6 md:grid-flow-col gap-x-5'>
										<div className={`border-b-2`}>
											<span className='text-blue text-base font-bold italic'>
												Suplentes 2
											</span>
										</div>
										{summoned
											.filter((row) => row.type === 'suplente 2')
											.map((convocado, index) => (
												<div
													key={index}
													className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
														(index + 1) % 2 === 0
															? 'bg-tableContent'
															: ''
													}`}>
													<span className='text-gray4'>{index + 1}</span>
													<span className='text-blue'>
														{convocado?.fullname}
													</span>
												</div>
											))}
									</div>
								</div>

								<div className='hidden md:flex flex-col gap-6 md:flex-row'>
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
											Recuerda que tienes 00:00 horas para bajarte de la
											convocatoria sin multa.
										</span>
										<span className='w-fit text-gray4 border-gray4 md:border-b'>
											Se agotó el tiempo para bajarte de la convocatoria sin
											multa. A partir de este momento la multa es la
											siguiente: --------
										</span>
									</div>
								</div>
							</>
						)}
					</div>

					{summoned.length > 0 && (
						<div className='flex flex-col gap-6 md:flex-row md:hidden'>
							<div className='flex flex-col text-sm justify-center px-2'>
								<span className='w-fit text-gray3 border-gray3 md:border-b'>
									Recuerda que tienes 00:00 horas para bajarte de la convocatoria
									sin multa.
								</span>
								<span className='w-fit text-gray4 border-gray4 md:border-b'>
									Se agotó el tiempo para bajarte de la convocatoria sin multa. A
									partir de este momento la multa es la siguiente: --------
								</span>
							</div>

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
						</div>
					)}
				</>
			)}
		</>
	);
};

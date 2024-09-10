import { FC } from 'react';
import { useRouter } from 'next/router';
import { ClockLoader } from 'react-spinners';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);

import { useStoreSummoned } from '@/store';
import { ButtonCustom } from '@/components/ui/components';

interface IProps {
	isGroup?: boolean;
}

export const CountDown: FC<IProps> = ({ isGroup }) => {
	const router = useRouter();
	const { currentDay, timeLeft, convocationDates } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	const condition = isGroup
		? now.isAfter(convocationDates?.callEndDate) && now.isBefore(convocationDates?.groupDate)
		: now.isBefore(convocationDates?.callDate);

	return (
		<div className='bg-white h-[250px] rounded-xl md:h-[353px]'>
			<div className='h-full flex justify-center items-center'>
				{currentDay ? (
					<div>
						{timeLeft ? (
							<div className='flex flex-col justify-center items-center text-blue space-y-6'>
								{condition ? (
									<>
										<span className='text-xs font-light md:text-xl'>
											Atleta, faltan
										</span>

										<div className='flex justify-center items-center font-extrabold space-x-[15px] md:space-x-[45px]'>
											<div className='flex flex-col justify-center items-center'>
												<div className='text-5xl font-semibold md:text-[80px]'>
													{timeLeft.hours}
												</div>
												<div className='text-xs text-skyBlue uppercase md:text-xl'>
													horas
												</div>
											</div>
											<span className='text-skyBlue text-5xl font-semibold md:text-[80px]'>
												:
											</span>
											<div className='flex flex-col justify-center items-center'>
												<div className='text-5xl font-semibold md:text-[80px]'>
													{timeLeft.minutes}
												</div>
												<div className='text-xs text-skyBlue uppercase md:text-xl'>
													minutos
												</div>
											</div>
											<span className='text-skyBlue text-5xl font-semibold md:text-[80px]'>
												:
											</span>
											<div className='flex flex-col justify-center items-center'>
												<div className='text-5xl font-semibold md:text-[80px]'>
													{timeLeft.seconds}
												</div>
												<div className='text-xs text-skyBlue uppercase md:text-xl'>
													segundos
												</div>
											</div>
										</div>

										<span className='text-xs font-light md:text-xl'>
											{!!isGroup ? (
												<>
													Para conocer los grupos de la{' '}
													<strong className='font-bold'>
														{currentDay?.name}
													</strong>
												</>
											) : (
												<>
													Para el inicio de la convocatoria{' '}
													<strong className='font-bold'>
														{currentDay?.name}
													</strong>
												</>
											)}
										</span>
									</>
								) : (
									<div className='flex flex-col justify-center items-center gap-5'>
										{isGroup ? (
											<>
												<span className='text-xl font-semibold text-center md:text-4xl'>
													Convocatoria en curso
												</span>

												<ButtonCustom
													color='#146586'
													defaultChecked
													className='text-base not-italic font-light text-blue border-blue'
													onClick={() => router.push('/convocatoria')}>
													Ir a la convocatoria
												</ButtonCustom>
											</>
										) : (
											<>
												<span className='text-xl font-semibold text-center md:text-4xl'>
													Convocatoria finalizada
												</span>

												<ButtonCustom
													color='#146586'
													defaultChecked
													className='text-base not-italic font-light text-blue border-blue'
													onClick={() => router.push('/grupos')}>
													Ver grupos
												</ButtonCustom>
											</>
										)}
									</div>
								)}
							</div>
						) : (
							<div className='h-full flex justify-center items-center'>
								<ClockLoader color='#146586' />
							</div>
						)}
					</div>
				) : (
					<span className='text-blue text-xl font-semibold text-center md:text-4xl'>
						Atleta, hoy no hay convocatoria
					</span>
				)}
			</div>
		</div>
	);
};

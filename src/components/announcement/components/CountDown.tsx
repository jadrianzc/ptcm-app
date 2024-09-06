import { ClockLoader } from 'react-spinners';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

import { useStoreSummoned } from '@/store';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);

export const CountDown = () => {
	const { currentDay, timeLeft, convocationDates } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	return (
		<div className='bg-white h-[250px] rounded-xl md:h-[353px]'>
			<div className='h-full flex justify-center items-center'>
				{currentDay ? (
					<div>
						{timeLeft ? (
							<div className='flex flex-col justify-center items-center text-blue space-y-6'>
								{now.isBefore(convocationDates?.callDate) ? (
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
											Para el inicio de la convocatoria{' '}
											<strong className='font-bold'>
												{currentDay?.name}
											</strong>
										</span>
									</>
								) : (
									<span className='text-xl font-semibold text-center md:text-4xl'>
										Convocatoria finalizada
									</span>
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

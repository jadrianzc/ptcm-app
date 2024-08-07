import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { ConvocatoriaIcon } from '@/icons';
import { ICountdown } from '../interfaces';
import { Divider } from 'antd';

export const Announcement = () => {
	const [timeLeft, setTimeLeft] = useState<ICountdown | null>(null);
	const convocados = [
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
	];

	const convocados2 = [
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
	];

	const convocados3 = [
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
		{
			name: 'Nombre del Jugador',
		},
	];

	useEffect(() => {
		// TODO: Cambiar fecha por la fecha de creación convocatoria
		const targetDate = dayjs('2024-08-07T21:35:00');

		const updateCountdown = () => {
			const now = dayjs();
			const difference = targetDate.diff(now);

			const duration = dayjs.duration(difference);

			setTimeLeft({
				hours: duration.hours(),
				minutes: duration.minutes(),
				seconds: duration.seconds(),
			});
		};

		const intervalId = setInterval(updateCountdown, 1000);

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<div className='space-y-5'>
			<div className='flex justify-start items-center space-x-5'>
				<div className='rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12'>
					<ConvocatoriaIcon className='w-5 h-5 md:w-6 md:h-6' />
				</div>
				<h2 className='text-xl text-blue font-medium md:text-3xl'>Convocatoria</h2>
			</div>

			<div className='space-y-8 md:space-y-14'>
				<div className='bg-white h-[250px] rounded-xl md:h-[353px]'>
					<div className='h-full flex justify-center items-center'>
						{timeLeft ? (
							<div className='flex flex-col justify-center items-center text-blue space-y-6'>
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
									Para el inicio de la convocatoria
								</span>
							</div>
						) : (
							<div>Cargando...</div>
						)}
					</div>
				</div>

				<ButtonCustom
					type='primary'
					className='w-full h-[250px] rounded-xl md:h-[353px]'
					color='#609D56'>
					Unirme
				</ButtonCustom>

				<div className='w-full h-auto bg-white rounded-xl px-5 py-6 space-y-5 shadow-sm'>
					<div className='content-convocatoria'>
						<span className='text-sm text-gray2 font-medium'>Convocatoria de hoy</span>
						<Divider type='vertical' />
						<span className='text-sm text-gray2 font-medium'>Liga Cñor Marisco</span>
						<Divider type='vertical' />
						<span className='text-sm text-gray2 font-medium'>Fecha 7</span>
						<Divider type='vertical' />
						<span className='text-sm text-gray4 md:text-gray2 font-medium'>
							Miercoles 12 de junio a las 20:00pm
						</span>
					</div>

					<div className='flex flex-col md:flex-row md:flex-wrap md:gap-5 2xl:gap-0'>
						<div className='w-auto h-full grid grid-cols-1 md:grid-rows-12 lg:grid-rows-10 xl:grid-rows-6 md:grid-flow-col gap-x-5'>
							{convocados.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}>
									<span className='text-gray4'>{index + 1}</span>
									<span className='text-blue'>{convocado.name}</span>
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
							{convocados2.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}>
									<span className='text-gray4'>{index + 1}</span>
									<span className='text-blue'>{convocado.name}</span>
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
							{convocados3.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}>
									<span className='text-gray4'>{index + 1}</span>
									<span className='text-blue'>{convocado?.name}</span>
								</div>
							))}
						</div>
					</div>

					<div className='hidden md:flex flex-col gap-6 md:flex-row'>
						<div className='flex flex-wrap gap-2'>
							<ButtonCustom
								type='primary'
								className='w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first'
								color='#D14747'>
								Bajarme
							</ButtonCustom>

							<ButtonCustom
								type='primary'
								className='w-full md:w-[328px] h-[57px] rounded-md'
								color='#609D56'>
								Unirme
							</ButtonCustom>
						</div>

						<div className='flex flex-col text-sm justify-center'>
							<span className='w-fit text-gray3 border-gray3 md:border-b'>
								Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
								multa.
							</span>
							<span className='w-fit text-gray4 border-gray4 md:border-b'>
								Se agotó el tiempo para bajarte de la convocatoria sin multa. A
								partir de este momento la multa es la siguiente: --------
							</span>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-6 md:flex-row md:hidden'>
					<div className='flex flex-col text-sm justify-center px-2'>
						<span className='w-fit text-gray3 border-gray3 md:border-b'>
							Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
							multa.
						</span>
						<span className='w-fit text-gray4 border-gray4 md:border-b'>
							Se agotó el tiempo para bajarte de la convocatoria sin multa. A partir
							de este momento la multa es la siguiente: --------
						</span>
					</div>

					<div className='flex flex-wrap gap-2'>
						<ButtonCustom
							type='primary'
							className='w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first'
							color='#D14747'>
							Bajarme
						</ButtonCustom>

						<ButtonCustom
							type='primary'
							className='w-full md:w-[328px] h-[57px] rounded-md'
							color='#609D56'>
							Unirme
						</ButtonCustom>
					</div>
				</div>
			</div>
		</div>
	);
};

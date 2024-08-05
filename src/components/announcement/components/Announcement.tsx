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
		const targetDate = dayjs('2024-07-30T21:35:00');

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
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
					<ConvocatoriaIcon className="w-6 h-6" />
				</div>
				<h2 className="text-3xl text-blue font-medium">Convocatoria</h2>
			</div>

			<div className="space-y-14">
				<div className="h-[353px] bg-white rounded-xl">
					<div className="h-full flex justify-center items-center">
						{timeLeft ? (
							<div className="flex flex-col justify-center items-center text-blue space-y-6">
								<span>Atleta, faltan</span>

								<div className="flex justify-center items-center space-x-[45px] font-extrabold">
									<div className="flex flex-col justify-center items-center">
										<div className="text-[80px] font-semibold">
											{timeLeft.hours}
										</div>
										<div className="text-xl text-skyBlue uppercase">horas</div>
									</div>
									<span className="text-[80px] text-skyBlue">:</span>
									<div className="flex flex-col justify-center items-center">
										<div className="text-[80px] font-semibold">
											{timeLeft.minutes}
										</div>
										<div className="text-xl text-skyBlue uppercase">
											minutos
										</div>
									</div>
									<span className="text-[80px] text-skyBlue">:</span>
									<div className="flex flex-col justify-center items-center">
										<div className="text-[80px] font-semibold">
											{timeLeft.seconds}
										</div>
										<div className="text-xl text-skyBlue uppercase">
											segundos
										</div>
									</div>
								</div>

								<span>Para el inicio de la convocatoria</span>
							</div>
						) : (
							<div>Cargando...</div>
						)}
					</div>
				</div>

				<ButtonCustom
					type="primary"
					className="w-full h-[353px] rounded-xl"
					color="#609D56"
				>
					Unirme
				</ButtonCustom>

				<div className="w-full h-auto bg-white rounded-xl px-5 py-6 space-y-5 shadow-sm">
					<div className="content-convocatoria">
						<span className="text-sm text-gray2 font-medium">Convocatoria de hoy</span>
						<Divider type="vertical" />
						<span className="text-sm text-gray2 font-medium">Liga Cñor Marisco</span>
						<Divider type="vertical" />
						<span className="text-sm text-gray2 font-medium">Fecha 7</span>
						<Divider type="vertical" />
						<span className="text-sm text-gray2 font-medium">
							Miercoles 12 de junio a las 20:00pm
						</span>
					</div>

					<div className="flex">
						<div className="w-auto h-full grid grid-rows-6 grid-flow-col gap-x-5">
							{convocados.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}
								>
									<span className="text-gray4">{index + 1}</span>
									<span className="text-blue">{convocado.name}</span>
								</div>
							))}
						</div>
						<div className="w-[26px] bg-tableContent mx-3 border border-y-0 border-r-[3px] border-r-blue"></div>
						<div className="w-auto h-full grid grid-rows-6 grid-flow-col gap-x-5">
							<div className={`border-b-2`}>
								<span className="text-blue text-base font-bold italic">
									Suplentes
								</span>
							</div>
							{convocados2.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}
								>
									<span className="text-gray4">{index + 1}</span>
									<span className="text-blue">{convocado.name}</span>
								</div>
							))}
						</div>
						<div className="w-[26px] bg-tableContent mx-3 border border-y-0 border-r-[3px] border-r-blue"></div>
						<div className="w-auto h-full grid grid-rows-6 grid-flow-col gap-x-5">
							<div className={`border-b-2`}>
								<span className="text-blue text-base font-bold italic">
									Suplentes 2
								</span>
							</div>
							{convocados3.map((convocado, index) => (
								<div
									key={index}
									className={`text-sm flex justify-between items-center py-1 px-2 space-x-7 ${
										(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
									}`}
								>
									<span className="text-gray4">{index + 1}</span>
									<span className="text-blue">{convocado?.name}</span>
								</div>
							))}
						</div>
					</div>

					<div className="flex space-x-6">
						<div className="flex space-x-2">
							<ButtonCustom
								type="primary"
								className="w-[328px] h-[57px] rounded-md"
								color="#D14747"
							>
								Bajarme
							</ButtonCustom>

							<ButtonCustom
								type="primary"
								className="w-[328px] h-[57px] rounded-md"
								color="#609D56"
							>
								Unirme
							</ButtonCustom>
						</div>

						<div className="flex flex-col text-sm justify-center">
							<span className="w-fit text-gray3 border-b border-gray3">
								Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
								multa.
							</span>
							<span className="w-fit text-gray4 border-b border-gray4">
								Se agotó el tiempo para bajarte de la convocatoria sin multa. A
								partir de este momento la multa es la siguiente: --------
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

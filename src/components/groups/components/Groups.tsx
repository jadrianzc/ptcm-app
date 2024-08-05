import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { GruposIcon, PtcmLetter } from '@/icons';
import { ICountdown } from '../interfaces';
import { Divider } from 'antd';

export const Groups = () => {
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
					<GruposIcon className="w-6 h-6" />
				</div>
				<h2 className="text-3xl text-blue font-medium">Grupos</h2>
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

								<span>
									Para conocer los grupos de <strong>hoy a las 20h00</strong>
								</span>
							</div>
						) : (
							<div>Cargando...</div>
						)}
					</div>
				</div>

				<div className="h-auto bg-blueTra rounded-xl p-10 space-y-8">
					<div className="content-convocatoria bg-white w-fit rounded-md p-[18px]">
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

					<div className="w-full flex flex-wrap justify-between items-center gap-y-10">
						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<span className="text-sm text-gray2 font-medium">
								Cancha 1 (Produbanco)
							</span>

							<div className="grid grid-rows-2 grid-flow-col gap-y-1">
								<div className="row-span-2 bg-turquoise mr-1 flex justify-center items-center">
									<PtcmLetter />
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-r-4 border-dashed text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="row-span-2 bg-turquoise ml-1 flex justify-center items-center rotate-180">
									<PtcmLetter />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

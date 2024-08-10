import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { GruposIcon, PtcmLetter } from '@/icons';
import { ICountdown } from '../interfaces';
import { Badge, Divider } from 'antd';

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
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<GruposIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Grupos</h2>
			</div>

			<div className="space-y-14">
				<div className="bg-white h-[250px] rounded-xl md:h-[353px]">
					<div className="h-full flex justify-center items-center">
						{timeLeft ? (
							<div className="flex flex-col justify-center items-center text-blue space-y-6">
								<span className="text-xs font-light md:text-xl">
									Atleta, faltan
								</span>

								<div className="flex justify-center items-center font-extrabold space-x-[15px] md:space-x-[45px]">
									<div className="flex flex-col justify-center items-center">
										<div className="text-5xl font-semibold md:text-[80px]">
											{timeLeft.hours}
										</div>
										<div className="text-xs text-skyBlue uppercase md:text-xl">
											horas
										</div>
									</div>
									<span className="text-skyBlue text-5xl font-semibold md:text-[80px]">
										:
									</span>
									<div className="flex flex-col justify-center items-center">
										<div className="text-5xl font-semibold md:text-[80px]">
											{timeLeft.minutes}
										</div>
										<div className="text-xs text-skyBlue uppercase md:text-xl">
											minutos
										</div>
									</div>
									<span className="text-skyBlue text-5xl font-semibold md:text-[80px]">
										:
									</span>
									<div className="flex flex-col justify-center items-center">
										<div className="text-5xl font-semibold md:text-[80px]">
											{timeLeft.seconds}
										</div>
										<div className="text-xs text-skyBlue uppercase md:text-xl">
											segundos
										</div>
									</div>
								</div>

								<span className="text-xs font-light md:text-xl">
									Para conocer los grupos de{' '}
									<strong className="font-semibold italic">
										hoy a las 20h00
									</strong>
								</span>
							</div>
						) : (
							<div>Cargando...</div>
						)}
					</div>
				</div>

				<div className="h-auto rounded-xl space-y-8 md:bg-blueTra md:p-10">
					<div className="content-convocatoria bg-white w-full rounded-md p-[10px] flex flex-wrap justify-center items-center gap-4 md:w-fit md:p-[18px]">
						<div className="text-sm text-gray2 font-medium">Convocatoria de hoy</div>
						<Divider type="vertical" className="hidden md:inline-block" />
						<div className="text-sm text-gray2 font-medium">Liga Cñor Marisco</div>
						<Divider type="vertical" className="hidden md:inline-block" />
						<div className="text-sm text-gray2 font-medium">Fecha 7</div>
						<Divider type="vertical" className="hidden md:inline-block" />
						<div className="text-sm text-gray2 font-medium text-center">
							Miercoles 12 de junio a las 20:00pm
						</div>
					</div>

					<div className="w-full flex flex-wrap justify-center items-center gap-y-5 lg:justify-between md:gap-y-10">
						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>

						<div className="bg-white w-[490px] rounded-md p-[18px] space-y-2">
							<div className="w-full flex justify-center items-center relative">
								<div className="rounded-full w-[27px] h-[27px] bg-blue flex justify-center items-center absolute bottom-[4.5px] md:w-12 md:h-12 md:-bottom-[6px]">
									<div className="text-white italic font-extrabold text-sm md:text-3xl mr-1">
										1
									</div>
								</div>
							</div>

							<div className="text-sm text-gray2 font-medium text-center md:text-left">
								Cancha 1 (Produbanco)
							</div>

							<div className="grid gap-x-1 md:grid-rows-2 md:grid-flow-col md:gap-y-1 md:gap-x-0">
								<div className="bg-turquoise h-[50px] flex justify-center items-center mb-1 col-span-2 md:mb-0 md:mr-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-0" />
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 1</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] border-b-4 border-dashed border-white text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base md:border-b-0 md:border-r-4">
									<span>Jugador 2</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 3</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-darkblue h-[137px] text-white font-bold italic flex flex-col justify-center items-center text-[9px] md:text-base">
									<span>Jugador 4</span>
									<span>Nombre Largo</span>
								</div>
								<div className="bg-turquoise h-[50px] flex justify-center items-center mt-1 col-span-2 md:mt-0 md:ml-1 md:col-span-1 md:row-span-2 md:h-full">
									<PtcmLetter className="h-[80px] rotate-90 md:h-auto md:rotate-180" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

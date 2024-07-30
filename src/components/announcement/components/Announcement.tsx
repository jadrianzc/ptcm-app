import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { ConvocatoriaIcon } from '@/icons';
import { ICountdown } from '../interfaces';

export const Announcement = () => {
	const [timeLeft, setTimeLeft] = useState<ICountdown | null>(null);

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
			</div>
		</div>
	);
};

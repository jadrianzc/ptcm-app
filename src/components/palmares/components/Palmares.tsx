import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { PalmaresIcon } from '@/icons';
import { ICountdown } from '../interfaces';
import { Avatar, Badge, Divider } from 'antd';
import { IoPersonCircleOutline } from 'react-icons/io5';

export const Palmares = () => {
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
		<div className="space-y-14">
			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
						<PalmaresIcon className="w-6 h-6" />
					</div>
					<h2 className="text-3xl text-blue font-medium">Palmares</h2>
				</div>

				<div>
					<div className="h-[530px] bg-white rounded-xl">a</div>
				</div>
			</div>

			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
						<span className="text-white italic font-black text-3xl mr-1	">10</span>
					</div>
					<h2 className="text-3xl text-blue font-medium">Los más ganadores</h2>
				</div>

				<Divider className="border-[#A5AAAD]" />

				<div className="flex">
					<div className="w-[710px] flex items-center">
						<Badge
							count={1}
							offset={[-130, 20]}
							className="badge-container relative z-50"
						>
							<Avatar
								shape="circle"
								className="w-[148px] h-[148px] border-[#707070]"
								src="https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp"
							/>
						</Badge>

						<div className="bg-white w-full h-[104px] relative pr-5 right-12">
							<div className="pl-16 flex justify-end items-center w-full h-full space-x-7">
								<div className="flex flex-col justify-center items-start space-y-3">
									<span className="text-xl text-gray2 font-medium">
										Nombre del Jugador
									</span>

									<div className="flex justify-start items-center space-x-3">
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">2 Ligas</span>
										</div>
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">2 Copas</span>
										</div>
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">
												1 Supercopa
											</span>
										</div>
									</div>
								</div>

								<Divider type="vertical" className="border-[#DCDDDF] !h-12" />

								<div className="flex justify-start items-center space-x-5">
									<div className="rounded-full w-10 h-10 bg-content flex justify-center items-center">
										<PalmaresIcon className="w-6 h-6" color="#A5AAAC" />
									</div>
									<span className="text-2xl text-gray3">5</span>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="w-[710px] flex items-center">
						<Badge
							count={1}
							offset={[-130, 20]}
							className="badge-container relative z-50"
						>
							<Avatar
								shape="circle"
								className="w-[148px] h-[148px] border-[#707070]"
								src="https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp"
							/>
						</Badge>

						<div className="bg-white w-full h-[104px] relative pr-5 right-12">
							<div className="pl-16 flex justify-end items-center w-full h-full space-x-7">
								<div className="flex flex-col justify-center items-start space-y-3">
									<span className="text-xl text-gray2 font-medium">
										Nombre del Jugador
									</span>

									<div className="flex justify-start items-center space-x-3">
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">2 Ligas</span>
										</div>
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">2 Copas</span>
										</div>
										<div className="flex justify-start items-center space-x-2">
											<div className="rounded-full w-6 h-6 bg-content flex justify-center items-center">
												<PalmaresIcon className="w-4 h-4" color="#A5AAAC" />
											</div>
											<span className="text-base text-gray3">
												1 Supercopa
											</span>
										</div>
									</div>
								</div>

								<Divider type="vertical" className="border-[#DCDDDF] !h-12" />

								<div className="flex justify-start items-center space-x-5">
									<div className="rounded-full w-10 h-10 bg-content flex justify-center items-center">
										<PalmaresIcon className="w-6 h-6" color="#A5AAAC" />
									</div>
									<span className="text-2xl text-gray3">5</span>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

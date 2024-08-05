import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { ButtonCustom } from '@/components/ui/components';
import { PalmaresIcon } from '@/icons';
import { ICountdown } from '../interfaces';
import { Avatar, Badge, Divider, Image, Table, TableColumnsType } from 'antd';
import { IoPersonCircleOutline } from 'react-icons/io5';

interface DataType {
	key: string;
	name: string;
	game: number;
	challenge: number;
	score: number;
	effectiveness: string;
}

const data: DataType[] = [
	{
		key: '1',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '2',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '3',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '4',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '5',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '6',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '7',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '8',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '9',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '10',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '11',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
	{
		key: '12',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '3',
	},
];

export const Palmares = () => {
	const [timeLeft, setTimeLeft] = useState<ICountdown | null>(null);

	const columns: TableColumnsType<DataType> = [
		{
			key: 'key',
			dataIndex: 'key',
			title: <span className="text-gray3 font-normal">No.</span>,
			width: '30px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'name',
			dataIndex: 'name',
			title: <span className="text-gray3 font-normal">Nombre</span>,
			width: '150px',
			align: 'left',
			render: (value) => <span className="text-blue">{value}</span>,
		},
		{
			key: 'game',
			dataIndex: 'game',
			title: <span className="text-gray3 font-normal">Ligas</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'challenge',
			dataIndex: 'challenge',
			title: <span className="text-gray3 font-normal">Copas</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'score',
			dataIndex: 'score',
			title: <span className="text-gray3 font-normal">Supercopas</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'effectiveness',
			dataIndex: 'effectiveness',
			title: <span className="text-gray3 font-normal">Total</span>,
			width: '80px',
			align: 'center',
			render: (value) => <span className="text-green">{value}</span>,
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
		<div className="space-y-14">
			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
						<PalmaresIcon className="w-6 h-6" />
					</div>
					<h2 className="text-3xl text-blue font-medium">Palmares</h2>
				</div>

				<div>
					<Image
						src="/ptcm_profile.png"
						alt="Foto integrantes PTCM"
						preview={false}
						className="w-full h-[530px] rounded-xl"
					/>
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

				<div className="flex flex-wrap justify-center items-center">
					<div className="w-[710px] flex items-center">
						<Badge
							count={1}
							offset={[-120, 20]}
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
							offset={[-120, 20]}
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

				<div className="bg-white rounded-xl p-5 space-y-3 shadow-sm">
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-7 h-7 bg-blue flex justify-center items-center">
							<PalmaresIcon className="w-4 h-4" />
						</div>
						<h2 className="text-sm text-gray2 font-medium">Lista</h2>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ y: 310 }}
					/>
				</div>
			</div>
		</div>
	);
};

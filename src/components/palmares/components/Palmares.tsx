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
			title: <span className='text-gray3 font-normal'>No.</span>,
			width: '30px',
			align: 'center',
			render: (value) => <span className='text-gray4'>{value}</span>,
		},
		{
			key: 'name',
			dataIndex: 'name',
			title: <span className='text-gray3 font-normal'>Nombre</span>,
			width: '150px',
			align: 'left',
			render: (value) => <span className='text-blue'>{value}</span>,
		},
		{
			key: 'game',
			dataIndex: 'game',
			title: <span className='text-gray3 font-normal'>Ligas</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className='text-gray4'>{value}</span>,
		},
		{
			key: 'challenge',
			dataIndex: 'challenge',
			title: <span className='text-gray3 font-normal'>Copas</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className='text-gray4'>{value}</span>,
		},
		{
			key: 'score',
			dataIndex: 'score',
			title: (
				<>
					<span className='text-gray3 font-normal hidden md:inline'>Supercopas</span>
					<span className='text-gray3 font-normal md:hidden'>SC</span>
				</>
			),
			width: '80px',
			align: 'center',
			render: (value) => <span className='text-gray4'>{value}</span>,
		},
		{
			key: 'effectiveness',
			dataIndex: 'effectiveness',
			title: <span className='text-gray3 font-normal'>Total</span>,
			width: '80px',
			align: 'center',
			render: (value) => <span className='text-green'>{value}</span>,
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
		<div className='space-y-14'>
			<div className='space-y-7'>
				<div className='flex justify-start items-center space-x-5'>
					<div className='rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12'>
						<PalmaresIcon className='w-5 h-5 md:w-6 md:h-6' />
					</div>
					<h2 className='text-xl text-blue font-medium md:text-3xl'>Palmares</h2>
				</div>

				<div>
					<Image
						src='/ptcm_profile.png'
						alt='Foto integrantes PTCM'
						preview={false}
						className='w-full h-[530px] rounded-xl'
					/>
				</div>
			</div>

			<div className='space-y-7'>
				<div className='flex justify-start items-center space-x-5'>
					<div className='rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12'>
						<span className='text-white italic font-black text-sm md:text-3xl mr-1	'>
							10
						</span>
					</div>
					<h2 className='text-xl text-blue font-medium md:text-3xl'>Los más ganadores</h2>
				</div>

				<Divider className='border-[#A5AAAD]' />

				<div className='flex flex-wrap justify-center items-center'>
					<div className='w-full lg:w-auto bg-white rounded-md flex justify-center items-center gap-3 p-3 palmares-content lg:bg-inherit'>
						<Badge
							count={1}
							color='#49a478'
							className='badge-container md:badge-container-mx lg:relative lg:z-50'>
							<Avatar
								shape='circle'
								className='w-[77px] h-[77px] md:w-[147px] md:h-[147px] border-[#707070]'
								src='https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp'
							/>
						</Badge>

						<div className='flex justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px] lg:relative lg:pr-5 lg:right-12'>
							<div className='w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-16'>
								<span className='text-[15px] md:text-xl text-gray2 font-medium'>
									Nombre del Jugador
								</span>

								<div className='flex flex-wrap justify-start items-center gap-2 md:gap-3'>
									<div className='flex justify-start items-center space-x-[6px] md:space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Ligas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Copas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											1 Supercopa
										</span>
									</div>
								</div>
							</div>

							<Divider
								type='vertical'
								className='border-gray2 !h-[79px] md:!h-[51px]'
							/>

							<div className='flex justify-start items-center space-x-1 md:space-x-5'>
								<div className='rounded-full w-8 h-8 md:w-10 md:h-10 bg-content flex justify-center items-center'>
									<PalmaresIcon
										className='w-5 h-5 md:w-6 md:h-6'
										color='#A5AAAC'
									/>
								</div>
								<span className='text-base md:text-2xl text-gray3'>5</span>
							</div>
						</div>
					</div>

					<div className='w-full lg:w-auto bg-white rounded-md flex justify-center items-center gap-3 p-3 palmares-content lg:bg-inherit'>
						<Badge
							count={1}
							color='#49a478'
							className='badge-container md:badge-container-mx lg:relative lg:z-50'>
							<Avatar
								shape='circle'
								className='w-[77px] h-[77px] md:w-[147px] md:h-[147px] border-[#707070]'
								src='https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp'
							/>
						</Badge>

						<div className='flex justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px] lg:relative lg:pr-5 lg:right-12'>
							<div className='w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-16'>
								<span className='text-[15px] md:text-xl text-gray2 font-medium'>
									Nombre del Jugador
								</span>

								<div className='flex flex-wrap justify-start items-center gap-2 md:gap-3'>
									<div className='flex justify-start items-center space-x-[6px] md:space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Ligas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Copas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											1 Supercopa
										</span>
									</div>
								</div>
							</div>

							<Divider
								type='vertical'
								className='border-gray2 !h-[79px] md:!h-[51px]'
							/>

							<div className='flex justify-start items-center space-x-1 md:space-x-5'>
								<div className='rounded-full w-8 h-8 md:w-10 md:h-10 bg-content flex justify-center items-center'>
									<PalmaresIcon
										className='w-5 h-5 md:w-6 md:h-6'
										color='#A5AAAC'
									/>
								</div>
								<span className='text-base md:text-2xl text-gray3'>5</span>
							</div>
						</div>
					</div>

					<div className='w-full lg:w-auto bg-white rounded-md flex justify-center items-center gap-3 p-3 palmares-content lg:bg-inherit'>
						<Badge
							count={1}
							color='#49a478'
							className='badge-container md:badge-container-mx lg:relative lg:z-50'>
							<Avatar
								shape='circle'
								className='w-[77px] h-[77px] md:w-[147px] md:h-[147px] border-[#707070]'
								src='https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp'
							/>
						</Badge>

						<div className='flex justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px] lg:relative lg:pr-5 lg:right-12'>
							<div className='w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-16'>
								<span className='text-[15px] md:text-xl text-gray2 font-medium'>
									Nombre del Jugador
								</span>

								<div className='flex flex-wrap justify-start items-center gap-2 md:gap-3'>
									<div className='flex justify-start items-center space-x-[6px] md:space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Ligas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Copas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											1 Supercopa
										</span>
									</div>
								</div>
							</div>

							<Divider
								type='vertical'
								className='border-gray2 !h-[79px] md:!h-[51px]'
							/>

							<div className='flex justify-start items-center space-x-1 md:space-x-5'>
								<div className='rounded-full w-8 h-8 md:w-10 md:h-10 bg-content flex justify-center items-center'>
									<PalmaresIcon
										className='w-5 h-5 md:w-6 md:h-6'
										color='#A5AAAC'
									/>
								</div>
								<span className='text-base md:text-2xl text-gray3'>5</span>
							</div>
						</div>
					</div>

					<div className='w-full lg:w-auto bg-white rounded-md flex justify-center items-center gap-3 p-3 palmares-content lg:bg-inherit'>
						<Badge
							count={1}
							color='#49a478'
							className='badge-container md:badge-container-mx lg:relative lg:z-50'>
							<Avatar
								shape='circle'
								className='w-[77px] h-[77px] md:w-[147px] md:h-[147px] border-[#707070]'
								src='https://www.anmosugoi.com/wp-content/uploads/2024/05/ONE-PIECE-CUMPLEANOS-LUFFY-PORTADA-1600x900.webp'
							/>
						</Badge>

						<div className='flex justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px] lg:relative lg:pr-5 lg:right-12'>
							<div className='w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-16'>
								<span className='text-[15px] md:text-xl text-gray2 font-medium'>
									Nombre del Jugador
								</span>

								<div className='flex flex-wrap justify-start items-center gap-2 md:gap-3'>
									<div className='flex justify-start items-center space-x-[6px] md:space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Ligas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											2 Copas
										</span>
									</div>
									<div className='flex justify-start items-center space-x-2'>
										<div className='rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6'>
											<PalmaresIcon
												className='w-3 h-3 md:w-4 md:h-4'
												color='#A5AAAC'
											/>
										</div>
										<span className='text-[13px] md:text-base text-gray3'>
											1 Supercopa
										</span>
									</div>
								</div>
							</div>

							<Divider
								type='vertical'
								className='border-gray2 !h-[79px] md:!h-[51px]'
							/>

							<div className='flex justify-start items-center space-x-1 md:space-x-5'>
								<div className='rounded-full w-8 h-8 md:w-10 md:h-10 bg-content flex justify-center items-center'>
									<PalmaresIcon
										className='w-5 h-5 md:w-6 md:h-6'
										color='#A5AAAC'
									/>
								</div>
								<span className='text-base md:text-2xl text-gray3'>5</span>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-white rounded-xl p-5 space-y-3 shadow-sm'>
					<div className='flex justify-start items-center space-x-5'>
						<div className='rounded-full w-7 h-7 bg-blue flex justify-center items-center'>
							<PalmaresIcon className='w-4 h-4' />
						</div>
						<h2 className='text-sm text-gray2 font-medium'>Lista</h2>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ x: 'max-content', y: 310 }}
					/>
				</div>
			</div>
		</div>
	);
};

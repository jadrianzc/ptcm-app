import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { AddUserIcon, MemberIcon } from '@/icons';

import { Collapse, CollapseProps, Divider, Table, TableColumnsType } from 'antd';
import { BsThreeDots } from 'react-icons/bs';
import { ICountdown } from '../../interfaces';

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

export const Members = () => {
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
			title: (
				<>
					<span className="text-gray3 font-normal hidden md:inline">Supercopas</span>
					<span className="text-gray3 font-normal md:hidden">SC</span>
				</>
			),
			width: '80px',
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

	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: (
				<div className="w-full h-full bg-white rounded-md flex justify-center items-center gap-3 p-3">
					<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center text-white font-black italic md:pr-1 md:text-[45px] md:w-20 md:h-20">
						E
					</div>

					<div className="flex justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px]">
						<div className="w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-16">
							<span className="text-[15px] md:text-xl text-gray2 font-medium">
								Categoría Elite
							</span>

							<div className="flex flex-wrap justify-start items-center gap-2 md:gap-3">
								<div className="flex justify-start items-center space-x-[6px] md:space-x-2">
									<div className="rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6">
										<MemberIcon
											className="w-3 h-3 md:w-4 md:h-4"
											color="#A5AAAC"
										/>
									</div>
									<span className="text-[13px] md:text-base text-gray3">
										13 miembros
									</span>
								</div>
							</div>
						</div>

						<Divider type="vertical" className="border-gray2 !h-[79px] md:!h-[51px]" />

						<div className="flex justify-start items-center space-x-1 md:space-x-5">
							<div className="rounded-full w-8 h-8 md:w-10 md:h-10 flex justify-center items-center">
								<AddUserIcon
									className="w-5 h-5 md:w-7 md:h-7"
									color="#A5AAAC"
									onClick={() => console.log('Click')}
								/>
							</div>
						</div>
					</div>
				</div>
			),
			children: (
				<div className="w-full bg-white rounded-lg shadow-sm">
					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ y: 315 }}
					/>
				</div>
			),
		},
	];

	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	return (
		<div className="space-y-14">
			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
						<MemberIcon className="w-5 h-5 md:w-6 md:h-6" />
					</div>
					<h2 className="text-xl text-blue font-medium md:text-3xl">Miembros</h2>
				</div>
			</div>

			<div className="member-content">
				<Collapse
					items={items}
					defaultActiveKey={['1']}
					onChange={onChange}
					expandIconPosition="end"
					collapsible="icon"
					bordered={false}
					expandIcon={(panelProps) => <BsThreeDots className="w-6 h-6" />}
					className="w-full"
				/>
			</div>
		</div>
	);
};

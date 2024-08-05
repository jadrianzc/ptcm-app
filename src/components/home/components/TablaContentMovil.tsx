import { Collapse, CollapseProps, Table, TableColumnsType } from 'antd';

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
		effectiveness: '100%',
	},
	{
		key: '2',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '3',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '4',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '5',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '6',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '7',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '8',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '9',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '10',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '11',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
	{
		key: '12',
		name: 'Nombre del Jugador',
		game: 1,
		challenge: 1,
		score: 1,
		effectiveness: '100%',
	},
];

export const TablaContentMovil = () => {
	const columns: TableColumnsType<DataType> = [
		{
			key: 'key',
			dataIndex: 'key',
			title: <span className="text-gray3 font-medium">No.</span>,
			width: '30px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'name',
			dataIndex: 'name',
			title: <span className="text-gray3 font-medium">Nombre</span>,
			width: '150px',
			align: 'left',
			render: (value) => <span className="text-blue">{value}</span>,
		},
		{
			key: 'game',
			dataIndex: 'game',
			title: <span className="text-gray3 font-medium">Juegos</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'challenge',
			dataIndex: 'challenge',
			title: <span className="text-gray3 font-medium">Retos</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'score',
			dataIndex: 'score',
			title: <span className="text-gray3 font-medium">Puntaje</span>,
			width: '60px',
			align: 'center',
			render: (value) => <span className="text-gray4">{value}</span>,
		},
		{
			key: 'effectiveness',
			dataIndex: 'effectiveness',
			title: <span className="text-gray3 font-medium">Efectividad</span>,
			width: '80px',
			align: 'center',
			render: (value) => <span className="text-green">{value}</span>,
		},
	];

	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: (
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
						<span className="text-white italic font-black text-sm">E</span>
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
			),
			children: (
				<div className="w-full bg-white rounded-lg px-2 py-4 space-y-2 shadow-md md:w-[560px]">
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
							<span className="text-white italic font-black text-sm">E</span>
						</div>
						<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ y: 310 }}
					/>
				</div>
			),
		},
		{
			key: '2',
			label: (
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
						<span className="text-white italic font-black text-sm">E</span>
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
			),
			children: (
				<div className="w-full bg-white rounded-lg px-2 py-4 space-y-2 shadow-md md:w-[560px]">
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
							<span className="text-white italic font-black text-sm">E</span>
						</div>
						<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ y: 310 }}
					/>
				</div>
			),
		},
		{
			key: '3',
			label: (
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
						<span className="text-white italic font-black text-sm">E</span>
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
			),
			children: (
				<div className="w-full bg-white rounded-lg px-2 py-4 space-y-2 shadow-md md:w-[560px]">
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
							<span className="text-white italic font-black text-sm">E</span>
						</div>
						<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						pagination={false}
						scroll={{ y: 310 }}
					/>
				</div>
			),
		},
	];

	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	return (
		<div className="w-full flex flex-wrap gap-3">
			<Collapse
				items={items}
				defaultActiveKey={['1']}
				onChange={onChange}
				expandIconPosition="end"
				className="w-full"
			/>
		</div>
	);
};

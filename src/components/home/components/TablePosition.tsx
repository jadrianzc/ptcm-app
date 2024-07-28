import React, { useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

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
];

export const TablePosition: React.FC = () => {
	const [filteredInfo, setFilteredInfo] = useState<Filters>({});
	const [sortedInfo, setSortedInfo] = useState<Sorts>({});

	const columns: TableColumnsType<DataType> = [
		{
			title: 'No.',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: 'Nombre',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Juegos',
			dataIndex: 'game',
			key: 'game',
		},
		{
			title: 'Retos',
			dataIndex: 'challenge',
			key: 'challenge',
		},
		{
			title: 'Puntaje',
			dataIndex: 'score',
			key: 'score',
		},
		{
			title: 'Efectividad',
			dataIndex: 'effectiveness',
			key: 'effectiveness',
		},
	];

	return (
		<div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
						<span className="text-white italic font-black text-sm">E</span>
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>

				<Table columns={columns} dataSource={data} pagination={false} />
			</div>

			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-6 h-6 bg-blue flex justify-center items-center">
						xd
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
				<Table columns={columns} dataSource={data} pagination={false} />
			</div>

			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-6 h-6 bg-blue flex justify-center items-center">
						xd
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
				<Table columns={columns} dataSource={data} pagination={false} />
			</div>

			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-6 h-6 bg-blue flex justify-center items-center">
						xd
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
				<Table columns={columns} dataSource={data} pagination={false} />
			</div>
			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-6 h-6 bg-blue flex justify-center items-center">
						xd
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
				<Table columns={columns} dataSource={data} pagination={false} />
			</div>
			<div className="">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-6 h-6 bg-blue flex justify-center items-center">
						xd
					</div>
					<h4 className="text-sm text-gray2 font-medium">Categoría Elite</h4>
				</div>
				<Table columns={columns} dataSource={data} pagination={false} />
			</div>
		</div>
	);
};

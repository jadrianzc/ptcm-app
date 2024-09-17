import { ITableAthete } from '@/components/admin/members/interfaces/interface_members';
import { TableColumnsType } from 'antd';

export const columns: TableColumnsType<ITableAthete> = [
	{
		key: 'key',
		dataIndex: 'key',
		title: <span className="text-gray3 font-medium">No.</span>,
		width: '40px',
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
		width: '80px',
		align: 'center',
		render: (value) => <span className="text-gray4">{value}</span>,
	},
	{
		key: 'effectiveness',
		dataIndex: 'effectiveness',
		title: <span className="text-gray3 font-medium">Efectividad</span>,
		width: '90px',
		align: 'center',
		render: (value) => <span className="text-green">{value}</span>,
	},
];

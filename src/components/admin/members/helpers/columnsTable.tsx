import { TableColumnsType } from 'antd';
import { ITableAthete } from '../interfaces/interface_members';

export const columnsTable: TableColumnsType<ITableAthete> = [
	{
		key: 'id',
		dataIndex: 'id',
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
];

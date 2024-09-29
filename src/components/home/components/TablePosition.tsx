import { Table } from 'antd';
import { useStoreSeason } from '@/store';
import { columns } from '../helpers';

export const TablePosition: React.FC = () => {
	const { categories } = useStoreSeason();

	return (
		<div className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(560px,_1fr))]">
			{categories.map((category) => (
				<div
					key={category.id}
					className="w-full bg-white rounded-lg px-2 py-4 space-y-2 shadow-md"
				>
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
							<span className="text-white italic font-black text-sm">
								{category.rendering}
							</span>
						</div>
						<h4 className="text-sm text-gray2 font-medium">{category.name}</h4>
					</div>

					<Table
						key={category.id}
						columns={columns}
						dataSource={category.athetes?.map((athete, index) => ({
							...athete,
							key: index + 1,
						}))}
						pagination={false}
						scroll={{ y: 310 }}
					/>
				</div>
			))}
		</div>
	);
};

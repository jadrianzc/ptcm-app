import { useStoreSeason } from '@/store';
import { Collapse, CollapseProps, Table } from 'antd';
import { columns } from '../helpers';

export const TablaContentMovil = () => {
	const { categories } = useStoreSeason();

	const items: CollapseProps['items'] = categories.map((category) => ({
		key: category.id,
		label: (
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-8 h-8 bg-blue flex justify-center items-center">
					<span className="text-white italic font-black text-sm">
						{category.rendering}
					</span>
				</div>
				<h4 className="text-sm text-gray2 font-medium">{category.name}</h4>
			</div>
		),
		children: (
			<div className="w-full bg-white rounded-lg shadow-sm md:w-[560px]">
				<Table
					columns={columns}
					dataSource={category.athetes?.map((athete, index) => ({
						...athete,
						key: index + 1,
					}))}
					pagination={false}
					scroll={{ y: 315 }}
				/>
			</div>
		),
	}));

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

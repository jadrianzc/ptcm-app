import React, { useState } from 'react';
import { Input, Table, TableColumnsType } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';
import { ITableAthete } from '../interfaces/interface_members';
import { useStoreLoading, useStoreMessage, useStoreSeason } from '@/store';
import { ButtonCustom } from '@/components/ui/components';
import { localApi } from '@/axios';
import { getAthetes, getCategories } from '../helpers';
const { Search } = Input;

const columns: TableColumnsType<ITableAthete> = [
	{ title: 'Cédula', dataIndex: 'identification' },
	{ title: 'Nombre', dataIndex: 'name' },
	{ title: 'Apellido', dataIndex: 'lastname' },
];

export const TableAtheltes = () => {
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { athetes, categories, setAthetes, setCategories } = useStoreSeason();
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const [filteredData, setFilteredData] = useState<ITableAthete[]>([]);

	// Función para manejar el cambio de búsqueda
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		const filtered = dataSource.filter((item) =>
			Object.keys(item).some((key) =>
				item[key as keyof typeof item]
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase()),
			),
		);

		setFilteredData(filtered);
	};

	const dataSource = athetes.map<ITableAthete>((athete) => ({
		key: athete.id,
		...athete,
	}));

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection: TableRowSelection<ITableAthete> = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const handleCategory = async (idCategory: number) => {
		try {
			setLoading(true);

			if (selectedRowKeys.length > 0) {
				const dataUpdate = {
					idCategory,
					idAthetes: selectedRowKeys,
				};

				const { data: respUpdate } = await localApi.put(
					'/atleta/updateCategoryAthete',
					dataUpdate,
				);

				const { data: athetes } = await getAthetes();
				setAthetes(athetes);

				const { data: categories } = await getCategories();
				setCategories(categories);

				message?.success(respUpdate.message);
			}
		} catch (error) {
			console.log(error);
			message?.error(`Ocurrió un error al asignar categoría.`);
		} finally {
			setSelectedRowKeys([]);
			setLoading(false);
		}
	};

	return (
		<div className="bg-white space-y-5 p-4">
			<div className="flex flex-wrap gap-5 justify-center items-center">
				{categories.map(({ id, name }) => (
					<ButtonCustom
						key={id}
						type="primary"
						onClick={() => handleCategory(id)}
						className="not-italic font-medium text-base"
					>
						{name}
					</ButtonCustom>
				))}
			</div>

			<Search
				placeholder="Buscar en la tabla"
				// onSearch={handleSearch}
				onChange={handleSearch}
				enterButton
				className="search-athete"
				allowClear
			/>

			<Table
				rowSelection={rowSelection}
				columns={columns}
				dataSource={filteredData.length === 0 ? dataSource : filteredData}
				pagination={{ position: ['none', 'bottomCenter'] }}
			/>
		</div>
	);
};

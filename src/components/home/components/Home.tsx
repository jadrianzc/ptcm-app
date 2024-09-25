import { TablaIcon } from '@/icons';
import { TablaContentMovil, TablePosition } from './';
import { useEffect } from 'react';
import { getCategories } from '@/components/admin/members/helpers';
import { useStoreSeason } from '@/store';

export const Home = () => {
	const { setCategories } = useStoreSeason();

	useEffect(() => {
		getCategories()
			.then((resp) => setCategories(resp.data))
			.catch((err) => console.log(err));
	}, [setCategories]);

	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<TablaIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Tablas</h2>
			</div>

			<div className="hidden md:block">
				<TablePosition />
			</div>

			<div className="block md:hidden">
				<TablaContentMovil />
			</div>
		</div>
	);
};

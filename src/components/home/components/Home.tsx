import { TablaIcon } from '@/icons';
import { TablePosition } from './';

export const Home = () => {
	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
					<TablaIcon className="w-6 h-6" />
				</div>
				<h2 className="text-3xl text-blue font-medium">Tablas</h2>
			</div>

			<TablePosition />
		</div>
	);
};

import React from 'react';
import { TablePosition } from './TablePosition';

export const Tables = () => {
	return (
		<div className="py-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-12 h-12 bg-blue flex justify-center items-center">
					xd
				</div>
				<h2 className="text-3xl text-blue font-medium">Tablas</h2>
			</div>

			<TablePosition />
		</div>
	);
};

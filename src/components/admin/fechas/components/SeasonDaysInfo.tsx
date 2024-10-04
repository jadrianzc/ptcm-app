import { useStoreSeason } from '@/store';
import { Badge } from 'antd';
import React from 'react';

export const SeasonDaysInfo = () => {
	const { upcomingDates, completedDates } = useStoreSeason();

	return (
		<div className="flex justify-start items-center space-x-14">
			<div className="text-base font-medium flex justify-center items-center space-x-[14px]">
				<Badge color="#146586" text="Próximas Fechas" />
				<div className="bg-white border border-gray6 w-[42px] h-8 rounded-full flex justify-center items-center">
					{upcomingDates}
				</div>
			</div>

			<div className="text-base font-medium flex justify-center items-center space-x-[14px]">
				<Badge color="#5ABB95" text="Completadas" />
				<div className="bg-white border border-gray6 w-[42px] h-8 rounded-full flex justify-center items-center">
					{completedDates}
				</div>
			</div>
		</div>
	);
};

import { Divider } from 'antd';
import { dayjs } from '@/libs';
import { useStoreSummoned } from '@/store';

export const HeaderTable = () => {
	const { currentDay } = useStoreSummoned();

	return (
		<div className="content-convocatoria">
			<span className="text-sm text-gray2 font-medium">Convocatoria de hoy</span>
			<Divider type="vertical" />
			<span className="text-sm text-gray2 font-medium">Liga Cñor Marisco</span>
			<Divider type="vertical" />
			<span className="text-sm text-gray2 font-medium">{currentDay?.name}</span>
			<Divider type="vertical" />
			<span className="text-sm text-gray4 md:text-gray2 font-medium">
				{dayjs(currentDay?.startAt)
					.utcOffset(0, false)
					.format('dddd DD MMMM, HH:mm a')
					.charAt(0)
					.toUpperCase() +
					dayjs(currentDay?.startAt)
						.utcOffset(0, false)
						.format('dddd DD MMMM, HH:mm a')
						.slice(1)}
			</span>
		</div>
	);
};

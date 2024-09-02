import { FC } from 'react';
import { Divider } from 'antd';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { ButtonCustom } from '@/components/ui/components';
import { getMatchByIdSeason } from '../helpers';
import { useStoreSeason } from '@/store';
import { IAddSeasonDB } from '../../interfaces';

interface IProps {
	season: IAddSeasonDB;
	index: number;
}

export const SeasonListItem: FC<IProps> = ({ season, index }) => {
	const {
		// State
		seasons,
		matchDays,

		// Methods
		setMatchDay,
		setUpcomingDates,
		setCompletedDates,
	} = useStoreSeason();

	return (
		<div
			className={`w-full bg-gray flex justify-between items-center p-2 border rounded-lg cursor-pointer ${
				matchDays[0]?.idSeason === season.id ? 'border-blue border-[3px]' : ''
			}`}
			onClick={() => {
				getMatchByIdSeason(seasons[index]?.id)
					.then((resp) => {
						setMatchDay(resp.respMatchDays.data);
						setUpcomingDates(resp.respMatchDays.upcomingDates);
						setCompletedDates(resp.respMatchDays.completed);
					})
					.catch((err) => console.log(err));
			}}
		>
			<div className="text-white text-2xl font-black italic bg-blue w-11 h-11 rounded-full flex justify-center items-center">
				<span className="mr-1">{seasons.length - index}</span>
			</div>

			<div className="flex flex-col justify-center items-start">
				<span className="text-gray2 text-sm font-medium">{season.name}</span>
				<span className="text-gray3 text-xs font-normal">
					{`${season.matchdays} Fechas`}
				</span>
			</div>

			<Divider type="vertical" className="border-gray2 !h-[37px] md:!h-[27px]" />

			<ButtonCustom type="text" className="p-0 text-gray5 ">
				<IoEllipsisHorizontalSharp />
			</ButtonCustom>
		</div>
	);
};

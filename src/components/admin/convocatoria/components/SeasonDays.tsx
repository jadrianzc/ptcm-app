import { IoMdAdd } from 'react-icons/io';

import { localApi } from '@/axios';
import { useStoreLoading, useStoreMessage, useStoreSeason } from '@/store';
import { SeasonDaysInfo, SeasonDaysCard } from './';
import { ButtonCustom } from '@/components/ui/components';
import { IResponseSetSesion } from '../../interfaces';

export const SeasonDays = () => {
	const { setLoading } = useStoreLoading();
	const { message } = useStoreMessage();
	const { matchDays } = useStoreSeason();

	const addMatchDay = async () => {
		try {
			setLoading(true);
			const lastCurrentMatchDay = matchDays[matchDays.length - 1];

			const totalSeasonMatchs = matchDays.filter(
				(match) => !match.name.endsWith('(b)'),
			).length;

			const dataMatchDay = {
				idSeason: lastCurrentMatchDay.idSeason,
				days: 1,
				startAt: lastCurrentMatchDay.startAt,
				totalSeasonMatchs: totalSeasonMatchs + 1,
			};

			const { data } = await localApi.post<IResponseSetSesion>(
				'/admin/setNewMatchDay',
				dataMatchDay,
			);
			message?.success(data.message);
		} catch (error: any) {
			console.log(error);
			console.log(error.response.data.message);
			message?.success(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex-grow px-5 space-y-7">
			<SeasonDaysInfo />

			<div>
				<ButtonCustom
					color="#146586"
					className="text-base font-medium not-italic w-[356px] h-[50px] text-blue border border-gray6"
					icon={<IoMdAdd className="w-5 h-5 text-blue" />}
					onClick={addMatchDay}
				>
					Crear Nueva Fecha
				</ButtonCustom>
			</div>

			<SeasonDaysCard />
		</div>
	);
};

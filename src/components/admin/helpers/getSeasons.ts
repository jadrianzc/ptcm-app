import { localApi } from '@/axios';
import { IResponseSetMatchDays, IResponseSetSesion, ISeasonMatch } from '../interfaces';

export const getSeasons = async (): Promise<ISeasonMatch> => {
	const { data: respSeason } = await localApi.get<IResponseSetSesion>('/admin/getSeason');
	const { data: respMatchDays } = await localApi.get<IResponseSetMatchDays>(
		`/admin/getMatchDaysByIdSeason?idSeason=${respSeason.data[0].id}`
	);

	console.log({ respSeason, respMatchDays });

	return { respSeason, respMatchDays };
};

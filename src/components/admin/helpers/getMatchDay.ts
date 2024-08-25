import { localApi } from '@/axios';
import { IResponseSetMatchDays, IResponseSetSesion, IRespMatchDays } from '../interfaces';

export const getMatchDay = async (idSeason: string): Promise<IRespMatchDays> => {
	const { data: respMatchDays } = await localApi.get<IResponseSetMatchDays>(
		`/admin/getMatchDaysByIdSeason?idSeason=${idSeason}`,
	);

	return { respMatchDays };
};

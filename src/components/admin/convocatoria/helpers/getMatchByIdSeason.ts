import { localApi } from '@/axios';
import { IRespMatchDays, IResponseSetMatchDays } from '../../interfaces';

export const getMatchByIdSeason = async (idSeason: string): Promise<IRespMatchDays> => {
	const { data: respMatchDays } = await localApi.get<IResponseSetMatchDays>(
		`/admin/getMatchDaysByIdSeason?idSeason=${idSeason}`,
	);

	return { respMatchDays };
};

import { localApi } from '@/axios';
import { IResponseSetMatchDays, IResponseSetSesion, IRespSeason } from '../interfaces';

export const getSeasons = async (): Promise<IRespSeason> => {
	const { data: respSeason } = await localApi.get<IResponseSetSesion>('/admin/getSeason');

	return { respSeason };
};

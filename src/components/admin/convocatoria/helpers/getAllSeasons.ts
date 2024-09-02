import { localApi } from '@/axios';
import { IResponseSetSesion, IRespSeason } from '../../interfaces';

export const getAllSeasons = async (): Promise<IRespSeason> => {
	const { data: respSeason } = await localApi.get<IResponseSetSesion>('/admin/getSeason');

	return { respSeason };
};

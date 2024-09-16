import { localApi } from '@/axios';
import { IResponseAthetes } from '../../interfaces';

export const getAthetes = async (): Promise<IResponseAthetes> => {
	const { data: respAthele } = await localApi.get<IResponseAthetes>('/atleta/getAllAthleteTable');

	return respAthele;
};

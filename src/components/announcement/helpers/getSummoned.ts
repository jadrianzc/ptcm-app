import { localApi } from '@/axios';
import { IResponseSummoned } from '../interfaces';

export const getSummoned = async (idSeason: string, idMatch: string) => {
	const { data: respSummoned } = await localApi.get<IResponseSummoned>(
		`/announcement/getSummoned?idSeason=${idSeason}&idMatch=${idMatch}`,
	);

	return respSummoned.data;
};

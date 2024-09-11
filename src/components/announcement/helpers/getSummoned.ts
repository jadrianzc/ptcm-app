import { localApi } from '@/axios';
import { IResponseSummoned } from '../interfaces';

export const getSummoned = async (idSeason: string, idMatch: string) => {
	console.log({ idSeason, idMatch });
	const { data: respSummoned } = await localApi.get<IResponseSummoned>(
		`/announcement/getSummoned?idSeason=${idSeason}&idMatch=${idMatch}`,
	);

	console.log(respSummoned);

	return respSummoned.data;
};

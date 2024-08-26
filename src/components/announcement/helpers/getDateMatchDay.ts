import { localApi } from '@/axios';
import { IResponseCallDate } from '../interfaces';

export const getDateMatchDay = async (): Promise<string> => {
	const { data: respCallDate } = await localApi.get<IResponseCallDate>(
		`/announcement/getCallDate`,
	);

	return respCallDate.data;
};

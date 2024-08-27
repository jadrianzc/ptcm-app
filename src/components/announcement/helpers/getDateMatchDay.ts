import { localApi } from '@/axios';
import { IResponseCallDate } from '../interfaces';
import { IAddJornadaDB } from '@/components/admin/interfaces';

export const getDateMatchDay = async (): Promise<IAddJornadaDB> => {
	const { data: respCallDate } = await localApi.get<IResponseCallDate>(
		`/announcement/getCallDate`,
	);

	return respCallDate.data as IAddJornadaDB;
};

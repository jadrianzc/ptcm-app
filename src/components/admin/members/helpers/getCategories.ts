import { localApi } from '@/axios';
import { IResponseCategories } from '../../interfaces';

export const getCategories = async (): Promise<IResponseCategories> => {
	const { data: respCategory } = await localApi.get<IResponseCategories>(
		'/category/getAllCategory',
	);

	return respCategory;
};

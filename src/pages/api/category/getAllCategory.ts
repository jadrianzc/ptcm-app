// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import {
	ICategories,
	IResponseCategories,
	IResponseUnauthorized,
} from '@/components/admin/interfaces';
import { ITableAthete } from '@/components/admin/members/interfaces/interface_members';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseCategories | IResponseUnauthorized>,
) {
	if (req.method === 'GET') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const allCategories = await db.select<ICategories[]>('*').from('Category');

			const athetes: ITableAthete[] = await db
				.select('id', 'identification', 'name', 'lastname', 'idCategory')
				.from('Atletas');

			const categories: ICategories[] = [];

			for (const category of allCategories) {
				const athetesCategory = athetes.filter(
					(athete) => athete.idCategory === category.id,
				);

				categories.push({ ...category, athetes: athetesCategory });
			}

			res.status(200).json({
				status: 200,
				message: `Exito.`,
				data: categories,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al obtener los registros de la convocatoria.',
				data: [],
			});
		}
	} else {
		// Si no es una petición GET, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

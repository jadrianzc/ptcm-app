// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import {
	IAddSeasonDB,
	IResponseSetSesion,
	IResponseUnauthorized,
} from '@/components/admin/interfaces';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseSetSesion | IResponseUnauthorized>
) {
	if (req.method === 'GET') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const seasons = await db
				.select<IAddSeasonDB[]>('*')
				.from('Temporadas')
				.orderBy('createAt', 'desc');

			res.status(200).json({
				status: 200,
				message: ``,
				data: seasons,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al obtener la temporada.',
				data: [],
			});
		}
	} else {
		// Si no es una petición GET, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

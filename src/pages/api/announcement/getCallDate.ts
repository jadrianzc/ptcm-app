// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import { IAddJornadaDB, IAddSeasonDB, IResponseUnauthorized } from '@/components/admin/interfaces';
import { IResponseCallDate } from '@/components/announcement/interfaces';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseCallDate | IResponseUnauthorized>,
) {
	if (req.method === 'GET') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const callDate: IAddJornadaDB = await db('Jornadas')
				.whereRaw('CAST(startAt AS DATE) = CAST(DATEADD(MINUTE, -302, GETDATE()) AS DATE)')
				.first();

			res.status(200).json({
				status: 200,
				data: callDate,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al obtener la temporada.',
			});
		}
	} else {
		// Si no es una petición GET, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IResponseSetSesion, IResponseUnauthorized } from '@/components/admin/interfaces';
import { getMatchDays } from '@/helpers';
import { IDataMatchDays } from '@/helpers/interfaces';

dayjs.extend(utc);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseSetSesion | IResponseUnauthorized>,
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const dataMatchDay = req.body as IDataMatchDays;

			const matchDay = getMatchDays(dataMatchDay);

			await db('Jornadas').insert(matchDay);
			await db('Temporadas').where('id', dataMatchDay.idSeason).increment('matchdays', 1);

			res.status(200).json({
				status: 200,
				message: `Jornada creada.`,
				data: [],
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al crear la temporada.',
				data: [],
			});
		}
	} else {
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

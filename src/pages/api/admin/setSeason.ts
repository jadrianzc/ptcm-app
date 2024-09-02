// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { db } from '@/db/dbconfig';
import { getMatchDays } from '@/helpers';
import {
	IAddSeasonDB,
	IResponseSetSesion,
	IResponseUnauthorized,
} from '@/components/admin/interfaces';
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

			const newSeason = req.body as IAddSeasonDB;
			const id = uuidv4();

			const ordenInserted: IAddSeasonDB[] = await db('Temporadas')
				.returning('id')
				.insert({ ...newSeason, id });

			const dataMatchDays = {
				idSeason: ordenInserted[0].id,
				days: newSeason.matchdays,
				startAt: newSeason.startAt,
			};

			// Obtiene todas las jornadas
			const matchDays = getMatchDays(dataMatchDays);

			await db('Jornadas').insert(matchDays);

			res.status(200).json({
				status: 200,
				message: `Temporada creada.`,
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

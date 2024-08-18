// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
	IAddJornadaDB,
	IAddSeasonDB,
	IResponseSetSesion,
	IResponseUnauthorized,
} from '@/components/admin/interfaces';
import { getMatchDays } from '@/helpers';

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
			const matchDays = getMatchDays(newSeason.matchdays);
			const id = uuidv4();

			const newJordanas: IAddJornadaDB[] = [];

			const ordenInserted: IAddSeasonDB[] = await db('Temporadas')
				.returning('id')
				.insert({ ...newSeason, id });

			for (const days in matchDays) {
				const newJordana: IAddJornadaDB = {
					id: uuidv4(),
					idSeason: ordenInserted[0].id,
					name: `Fecha ${parseInt(days) + 1}`,
					startAt: matchDays[days],
				};

				newJordanas.push(newJordana);
			}

			await db('Jornadas').insert(newJordanas);

			res.status(200).json({
				status: 200,
				message: `Temporada creada.`,
				// data: orderFormat[0],
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al crear la temporada.',
			});
		}
	} else {
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

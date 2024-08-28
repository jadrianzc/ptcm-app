// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import { IResponseSummoned, ISummoned } from '@/components/announcement/interfaces';

dayjs.extend(utc);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseSummoned | IResponseUnauthorized>,
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idSeason, idMatch, idAthlete } = req.body as ISummoned;
			const id = uuidv4();

			const summoned = await db
				.select<ISummoned[]>('*')
				.from('Convocados')
				.where('idMatch', idMatch)
				.andWhere('idAthlete', idAthlete);

			if (summoned.length > 0) {
				return res.status(409).json({
					status: 409,
					message: `El usuario ya se encuentra registrado.`,
					data: [],
				});
			}

			const summonedMatchTotal = await db
				.select<ISummoned[]>('*')
				.from('Convocados')
				.where('idMatch', idMatch)
				.orderBy('createAt');

			const type =
				summonedMatchTotal.length <= 24
					? 'titular'
					: summonedMatchTotal.length > 24 && summonedMatchTotal.length <= 34
					? 'suplente'
					: 'suplente 2';

			await db('Convocados')
				.returning('*')
				.insert({ id, idSeason, idMatch, idAthlete, type });

			const newSummoned = await db
				.select<ISummoned[]>('*')
				.from('Convocados')
				.orderBy('createAt');

			res.status(200).json({
				status: 200,
				message: `Registro exitoso.`,
				data: newSummoned,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al registrarse en la convocatoria.',
				data: [],
			});
		}
	} else {
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

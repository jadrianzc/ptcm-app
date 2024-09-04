// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
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
	if (req.method === 'DELETE') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { id, type, idMatch, idSeason } = req.body as ISummoned;

			const summoned = await db
				.select<ISummoned[]>('*')
				.from('ViewConvocatoriaUser')
				.where('type', type)
				.orderBy('createAt');

			await db('Convocados').where({ id }).del();

			if (type === 'titular' && summoned.length === 24) {
				const firstSuplente = await db
					.select<ISummoned[]>('*')
					.from('ViewConvocatoriaUser')
					.where('type', 'suplente')
					.orderBy('createAt')
					.first();

				!!firstSuplente &&
					(await db('Convocados')
						.where({ id: firstSuplente?.id })
						.update({ type: 'titular' }));
			} else if (type === 'suplente' && summoned.length === 10) {
				const firstSuplente2 = await db
					.select<ISummoned[]>('*')
					.from('ViewConvocatoriaUser')
					.where('type', 'suplente 2')
					.orderBy('createAt')
					.first();

				!!firstSuplente2 &&
					(await db('Convocados')
						.where({ id: firstSuplente2?.id })
						.update({ type: 'suplente' }));
			}

			const newSummoned = await db
				.select<ISummoned[]>('*')
				.from('ViewConvocatoriaUser')
				.where('idMatch', idMatch)
				.andWhere('idSeason', idSeason)
				.orderBy('createAt');

			res.status(200).json({
				status: 200,
				message: `Se ha dado de baja exitosamente.`,
				data: newSummoned,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al intentar darse de baja.',
				data: [],
			});
		}
	} else {
		// Si no es una petición DELETE, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['DELETE']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

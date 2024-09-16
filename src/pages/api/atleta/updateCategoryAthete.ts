// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';

dayjs.extend(utc);

export interface IRequest {
	idAthetes: string[];
	idCategory: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'PUT') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idAthetes, idCategory } = req.body as IRequest;

			await db('Atletas').whereIn('id', idAthetes).update({ idCategory });

			res.status(200).json({
				status: 200,
				message: `Categoria asignada`,
				// data: groupsDB,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al asignar categoría',
				// data: [],
			});
		}
	} else {
		// Si no es una petición PUT, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['PUT']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

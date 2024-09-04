// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import { IResponseUser, IUser } from '@/store/auth/interfaces';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

dayjs.extend(utc);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseUser | IResponseUnauthorized>,
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const user = req.body as IUser;
			const id = uuidv4();
			const password = bcrypt.hashSync(user.password, 10);

			await db('Atletas').insert({ ...user, id, password });

			res.status(200).json({
				status: 200,
				message: `Atleta creado.`,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al crear al atleta.',
			});
		}
	} else {
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import { IGroups, IMatches, IResponseGroup } from '@/components/announcement/interfaces';

dayjs.extend(utc);

interface IBody {
	idGroup: string;
	matches: IMatches[];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>
) {
	if (req.method === 'PUT') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const groupMatches = req.body as IBody[];

			for (const group of groupMatches) {
				await db('Groups')
					.where({ id: group.idGroup })
					.update({ matches: JSON.stringify(group.matches) });
			}

			res.status(200).json({
				status: 200,
				message: `Partidos generados.`,
				data: [],
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
		// Si no es una petición PUT, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['PUT']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

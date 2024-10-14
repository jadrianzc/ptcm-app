// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import { IGroups, IResponseGroup, ISummoned } from '@/components/announcement/interfaces';

dayjs.extend(utc);

interface IBody {
	idSeason: string | undefined;
	idMatch: string | undefined;
	groups: ISummoned[][];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>,
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idSeason, idMatch, groups } = req.body as IBody;

			for (const groupIndex in groups) {
				const id = uuidv4();
				const name = `Grupo ${Number(groupIndex) + 1}`;
				const idCancha = Number(groupIndex) + 1;

				const dataGroups = groups[groupIndex].map((player, index) => ({
					id,
					name,
					idSeason,
					idMatch,
					idCancha,
					idPlayer: player.idAthlete,
					player: player.fullname,
					category: player.category,
				}));

				const data: IGroups[] = await db('Groups').returning('*').insert(dataGroups);
			}

			// const groupsDB = data.map((item) => ({
			// 	...item,
			// 	groups: JSON.parse(item.groups.toString()),
			// }));

			res.status(200).json({
				status: 200,
				message: `Grupos creados.`,
				// data: groupsDB,
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
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

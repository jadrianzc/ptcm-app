// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import {
	IGroups,
	IGroupsDB,
	IResponseGroup,
	ISummoned,
} from '@/components/announcement/interfaces';

dayjs.extend(utc);

interface IBody {
	idSeason: string | undefined;
	idMatch: string | undefined;
	groups: ISummoned[][];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idSeason, idMatch, groups } = req.body as IBody;

			for (const groupIndex in groups) {
				const idGroup = uuidv4();
				const name = `Grupo ${Number(groupIndex) + 1}`;
				const idCancha = Number(groupIndex) + 1;

				const dataGroups = groups[groupIndex].map((player) => ({
					id: uuidv4(),
					idGroup,
					name,
					idSeason,
					idMatch,
					idCancha,
					idPlayer: player.idAthlete,
					player: player.fullname,
					category: player.category,
				}));

				await db('Groups').insert(dataGroups);
			}

			const groupsDb = await db.select<IGroupsDB[]>('*').from('Groups');

			const groupsDbItem = Object.values(
				groupsDb.reduce<Record<string, IGroups>>((acc, item) => {
					const player = {
						id: item.id,
						idPlayer: item.idPlayer,
						player: item.player,
						category: item.category,
					};

					const dataGroup = {
						idGroup: item.idGroup,
						name: item.name,
						idSeason: item.idSeason,
						idMatch: item.idMatch,
						idCancha: item.idCancha,
						createAt: item.createAt,
						updateAt: item.updateAt,
					};

					if (!acc[item.idGroup]) {
						acc[item.idGroup] = { ...dataGroup, groups: [], matches: [] };
					}

					acc[item.idGroup].groups.push(player);

					return acc;
				}, {})
			);

			res.status(200).json({
				status: 200,
				message: `Grupos creados.`,
				data: groupsDbItem,
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import {
	IGroups,
	IGroupsDB,
	IResponseGroup,
	ViewPartidos,
} from '@/components/announcement/interfaces';

dayjs.extend(utc);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>
) {
	if (req.method === 'GET') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idSeason, idMatch } = req.query;

			const groupsDb = await db
				.select<IGroupsDB[]>('*')
				.from('Groups')
				.where('idMatch', idMatch)
				.andWhere('idSeason', idSeason)
				.orderBy('idCancha');

			const partidosView = await db
				.select<ViewPartidos[]>('*')
				.from('ViewPartidos')
				.orderBy('idCancha')
				.orderBy('name');

			if (groupsDb.length === 0) {
				res.status(200).json({
					status: 404,
					message: `No hay datos.`,
					data: [],
				});
				return;
			}

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

			// const groups = JSON.parse(data[0]?.groups as string);
			const groups = groupsDbItem.map((item) => {
				const matches = partidosView.filter((party) => party.idGroup === item.idGroup);

				return {
					...item,
					matches,
				};
			});

			res.status(200).json({
				status: 200,
				message: `Exito.`,
				data: groups,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al obtener los registros de la convocatoria.',
				data: [],
			});
		}
	} else {
		// Si no es una petición GET, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

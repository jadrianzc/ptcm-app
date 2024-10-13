// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/dbconfig';

import { dayjs } from '@/libs';
import { IResponseUnauthorized, IResultMatch } from '@/components/admin/interfaces';
import { IGroups, IResponseGroup, ViewPartidos } from '@/components/announcement/interfaces';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>,
) {
	if (req.method === 'POST') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const { idParty, resultA, resultB, idMatch, idSeason } = req.body as IResultMatch;
			const updateAt = dayjs().toISOString();

			await db('Partidos').where('id', idParty).update({ resultA, resultB, updateAt });

			const groupsDb = await db
				.select<IGroups[]>('*')
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

			// const groups = JSON.parse(data[0]?.groups as string);
			const groups = groupsDb.map((item) => {
				const matches = partidosView.filter((party) => party.idGroup === item.id);

				return {
					...item,
					groups: JSON.parse(item.groups.toString()),
					matches,
				};
			});

			res.status(200).json({
				status: 200,
				message: `Resultado registrado.`,
				data: groups,
			});
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 400,
				message: 'Ocurrió un error al ingresar un resultado.',
				data: [],
			});
		}
	} else {
		// Si no es una petición POST, retornar un error 405 (Método no permitido)
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Método ${req.method} no permitido.`);
	}
}

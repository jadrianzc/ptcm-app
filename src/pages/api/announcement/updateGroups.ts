// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { dayjs } from '@/libs';
import { db } from '@/db/dbconfig';
import { IResponseUnauthorized } from '@/components/admin/interfaces';
import { IGroups, IResponseGroup } from '@/components/announcement/interfaces';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseGroup | IResponseUnauthorized>
) {
	if (req.method === 'PUT') {
		try {
			if (process.env.NEXT_PUBLIC_API_TOKEN !== req.headers.authorization) {
				return res.status(401).json({ status: 401, error: 'Unauthorized' });
			}

			const newGroups = req.body as IGroups[];

			for (const group of newGroups) {
				const { groups } = group;
				const existingRecords = await db
					.select('id')
					.from('Groups')
					.where({ idGroup: group.idGroup });

				// Iteramos sobre los registros existentes y los nuevos datos del array groups
				for (let i = 0; i < groups.length; i++) {
					const currentRecord = existingRecords[i];
					const newGroupData = groups[i];

					// Actualizamos cada registro con los datos del array groups
					await db('Groups')
						.where({ id: currentRecord.id }) // Se actualiza cada registro por su id único
						.update({
							idPlayer: newGroupData.idPlayer,
							player: newGroupData.player,
							category: newGroupData.category,
							updateAt: dayjs().toISOString(),
						});
				}
			}

			res.status(200).json({
				status: 200,
				message: `Grupos actualizados.`,
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

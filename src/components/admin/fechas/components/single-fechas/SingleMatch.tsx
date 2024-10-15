import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { localApi } from '@/axios';
import { MatchContainer } from '../';
import { useStoreSummoned } from '@/store';
import { GroupListItem } from '@/components/groups';
import { HeaderTable } from '@/components/announcement';
import { IGroupItems } from '@/components/announcement/interfaces';

interface IDataPlayer {
	index: number;
	numPlayer: number;
	player: IGroupItems;
}

export const SingleMatch = () => {
	const router = useRouter();
	const { groups, setGroups } = useStoreSummoned();
	const [firstDataPlayer, setFirstDataPlayer] = useState<IDataPlayer[]>([]);

	const idMatch = router.query.id?.toString().split('+')[1] ?? '';
	const idSeason = router.query.id?.toString().split('+')[2] ?? '';

	const getGroups = useCallback(async () => {
		try {
			const { data: respGroup } = await localApi.get(
				`/announcement/getGroups?idSeason=${idSeason}&idMatch=${idMatch}`
			);

			setGroups(respGroup.data);
		} catch (error) {
			console.log(error);
			setGroups([]);
		}
	}, [setGroups, idMatch, idSeason]);

	useEffect(() => {
		if (router.query.id) getGroups();
	}, [getGroups, router.query.id]);

	console.log(groups);

	return (
		<div>
			<>
				{groups.length > 0 && (
					<div className='h-auto rounded-xl space-y-8 md:bg-blueTra md:p-10'>
						<div className='content-convocatoria bg-white w-full rounded-md p-[10px] flex flex-wrap justify-center items-center gap-4 md:w-fit md:p-[18px]'>
							<HeaderTable />
						</div>

						<div className='w-full flex flex-wrap justify-center items-center gap-y-5 lg:justify-between md:gap-y-10'>
							{groups?.map((group, index) => (
								<div key={group.idGroup} className='flex flex-col gap-5'>
									<GroupListItem
										group={group}
										index={index}
										firstDataPlayer={firstDataPlayer}
										setFirstDataPlayer={setFirstDataPlayer}
									/>

									<MatchContainer matches={group.matches ?? []} />
								</div>
							))}
						</div>
					</div>
				)}
			</>
		</div>
	);
};

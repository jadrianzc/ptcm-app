import { localApi } from '@/axios';
import { IGroupItems } from '@/components/announcement/interfaces';
import { useStoreSummoned } from '@/store';
import { useCallback, useEffect, useState } from 'react';
import { GroupListItem } from './GroupListItem';
import { HeaderTable } from '@/components/announcement';

interface IDataPlayer {
	index: number;
	numPlayer: number;
	player: IGroupItems;
}

export const GroupList = () => {
	const { currentDay, groups, setGroups } = useStoreSummoned();
	const [firstDataPlayer, setFirstDataPlayer] = useState<IDataPlayer[]>([]);

	const getGroups = useCallback(async () => {
		try {
			const idSeason = currentDay?.idSeason;
			const idMatch = currentDay?.id;
			const { data: respGroup } = await localApi.get(
				`/announcement/getGroups?idSeason=${idSeason}&idMatch=${idMatch}`
			);

			setGroups(respGroup.data);
		} catch (error) {
			console.log(error);
			setGroups([]);
		}
	}, [currentDay, setGroups]);

	useEffect(() => {
		getGroups();
	}, [getGroups]);

	return (
		<>
			{groups.length > 0 && (
				<div className='h-auto rounded-xl space-y-8 md:bg-blueTra md:p-10'>
					<div className='content-convocatoria bg-white w-full rounded-md p-[10px] flex flex-wrap justify-center items-center gap-4 md:w-fit md:p-[18px]'>
						<HeaderTable />
					</div>

					<div className='w-full flex flex-wrap justify-center items-center gap-y-5 lg:justify-between md:gap-y-10'>
						{groups?.map((group, index) => (
							<GroupListItem
								key={group.id}
								group={group}
								index={index}
								firstDataPlayer={firstDataPlayer}
								setFirstDataPlayer={setFirstDataPlayer}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

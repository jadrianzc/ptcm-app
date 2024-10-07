import { useCallback, useEffect, useState } from 'react';
import { localApi } from '@/axios';
import { GroupListItem } from '@/components/groups';
import { useStoreSummoned } from '@/store';
import { Divider } from 'antd';
import { useRouter } from 'next/router';
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
				`/announcement/getGroups?idSeason=${idSeason}&idMatch=${idMatch}`,
			);

			setGroups(respGroup.data);
		} catch (error) {
			console.log(error);
			setGroups([]);
		}
	}, [setGroups, idMatch, idSeason]);

	useEffect(() => {
		getGroups();
	}, [getGroups]);

	console.log({ groups });

	return (
		<div>
			<>
				{groups.length > 0 && (
					<div className="h-auto rounded-xl space-y-8 md:bg-blueTra md:p-10">
						<div className="content-convocatoria bg-white w-full rounded-md p-[10px] flex flex-wrap justify-center items-center gap-4 md:w-fit md:p-[18px]">
							<div className="text-sm text-gray2 font-medium">
								Convocatoria de hoy
							</div>
							<Divider type="vertical" className="hidden md:inline-block" />
							<div className="text-sm text-gray2 font-medium">Liga Cñor Marisco</div>
							<Divider type="vertical" className="hidden md:inline-block" />
							<div className="text-sm text-gray2 font-medium">Fecha 7</div>
							<Divider type="vertical" className="hidden md:inline-block" />
							<div className="text-sm text-gray2 font-medium text-center">
								Miercoles 12 de junio a las 20:00pm
							</div>
						</div>

						<div className="w-full flex flex-wrap justify-center items-center gap-y-5 lg:justify-between md:gap-y-10">
							{groups?.map((group, index) => (
								<div key={index} className="flex flex-col gap-5">
									<GroupListItem
										group={group}
										index={index}
										firstDataPlayer={firstDataPlayer}
										setFirstDataPlayer={setFirstDataPlayer}
									/>
									<div className="bg-white rounded-md p-[18px]">
										<span>Partido 1</span>
										<div className="w-full flex justify-between items-center">
											<div className="grid grid-cols-3 grid-rows-2">
												<div className="bg-[#14668630] w-[150px] col-start-1 col-end-3">
													Diego Franco
												</div>
												<div className="bg-[#14668620] w-[150px] col-start-1 col-end-3">
													Marlon Andrade
												</div>
												<div className="bg-[#43849E] text-white col-start-3 row-start-1 row-span-2 flex justify-center items-center">
													0
												</div>
											</div>
											{/* <div>vs</div>
											<div className="grid grid-cols-3 grid-rows-2">
												<div className="bg-[#43849E] text-white row-start-1 row-span-2 flex justify-center items-center">
													0
												</div>
												<div className="bg-[#14658630] col-start-2 col-span-2">
													Diego Franco
												</div>
												<div className="bg-[#14668620] col-start-2 col-span-2">
													Marlon Andrade
												</div>
											</div> */}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</>
		</div>
	);
};

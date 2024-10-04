import { localApi } from '@/axios';
import { useStoreSummoned } from '@/store';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const SingleMatch = () => {
	const router = useRouter();
	const { groups, setGroups } = useStoreSummoned();

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

	console.log(groups);

	return <div>{idMatch}</div>;
};

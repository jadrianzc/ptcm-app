import { useCallback, useEffect } from 'react';

import { useStoreSummoned } from '@/store';
import { getDateMatchDay, getSummoned } from '@/components/announcement/helpers';
import { dayjs } from '@/libs';

export const MatchdayLayout = ({ children }: { children: React.ReactNode }) => {
	const { setCurrentDay, setConvocationDates, setSummoned } = useStoreSummoned();

	const getMatchDay = useCallback(async () => {
		try {
			// Obtener día del partido
			const respCurrentDay = await getDateMatchDay();
			setCurrentDay(respCurrentDay);

			if (respCurrentDay) {
				const { id: idMatch, idSeason, startAt } = respCurrentDay;

				// Asignar las fechas de convocatoria y creación de grupos
				const callDate = dayjs.utc(startAt).subtract(6, 'h');
				const callEndDate = dayjs.utc(startAt).subtract(4, 'h');
				const groupDate = dayjs.utc(startAt).subtract(3, 'h');
				setConvocationDates({ callDate, callEndDate, groupDate });

				// Obtener los atletas convocados
				const respSummoned = await getSummoned(idSeason, idMatch);
				setSummoned(respSummoned);
			}
		} catch (error) {
			console.log(error);
		}
	}, [setCurrentDay, setConvocationDates, setSummoned]);

	useEffect(() => {
		getMatchDay();
	}, [getMatchDay]);

	return <>{children}</>;
};

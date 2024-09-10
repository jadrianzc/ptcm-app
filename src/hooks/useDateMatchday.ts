import { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';
import { getDateMatchDay, getSummoned } from '@/components/announcement/helpers';
import { useStoreLoading, useStoreSummoned } from '@/store';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);

export const useDateMatchday = () => {
	const { setLoading } = useStoreLoading();
	const { currentDay, setSummoned, setCurrentDay, setTimeLeft, setConvocationDates } =
		useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	// Obtener día actual de la jornada
	useEffect(() => {
		if (currentDay) {
			const idSeason = currentDay.idSeason;
			const idMatch = currentDay.id;
			getSummoned(idSeason, idMatch)
				.then((resp) => {
					setSummoned(resp);
				})
				.catch((err) => console.log(err));
		}
	}, [currentDay, setSummoned]);

	const fetchGetDateMatchDay = useCallback(async () => {
		try {
			setLoading(true);
			const resp = await getDateMatchDay();

			setCurrentDay(resp);

			const date = resp.startAt;

			const callDate = dayjs.utc(date).subtract(10, 'h');
			const callEndDate = dayjs.utc(date).subtract(10, 'h');
			const groupDate = dayjs.utc(date).subtract(6, 'h');

			setConvocationDates({ callDate, callEndDate, groupDate });

			const updateCountdown = () => {
				const now = dayjs().utcOffset(0, true);
				const difference = dayjs().utcOffset(0, true).isBefore(callDate)
					? callDate.diff(now)
					: dayjs().utcOffset(0, true).isAfter(callEndDate) &&
					  dayjs().utcOffset(0, true).isBefore(groupDate)
					? groupDate.diff(now)
					: null;

				if (!difference) {
					setTimeLeft({
						hours: 0,
						minutes: 0,
						seconds: 0,
					});

					return;
				}

				const duration = dayjs.duration(difference);
				const time = {
					hours: duration.hours(),
					minutes: duration.minutes(),
					seconds: duration.seconds(),
				};

				setTimeLeft(time);
			};

			const intervalId = setInterval(updateCountdown, 1000);
			return () => clearInterval(intervalId); // Cleanup interval on component unmount
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [setCurrentDay, setLoading, setTimeLeft, setConvocationDates]);

	useEffect(() => {
		fetchGetDateMatchDay();
	}, [fetchGetDateMatchDay]);

	return {
		now,
		currentDay,
	};
};

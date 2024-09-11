import { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';
import { getDateMatchDay, getSummoned } from '@/components/announcement/helpers';
import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { IResponseSummoned, ISummoned } from '@/components/announcement/interfaces';
import { localApi } from '@/axios';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);

export const useDateMatchday = () => {
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { summoned, currentDay, setSummoned, setCurrentDay, setTimeLeft, setConvocationDates } =
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

			const callDate = dayjs.utc(date).subtract(6, 'h');
			const callEndDate = dayjs.utc(date).subtract(4, 'h');
			const groupDate = dayjs.utc(date).subtract(3, 'h');

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

	const shuffleArray = (array: ISummoned[]): ISummoned[] => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const groupIntoChunks = (array: ISummoned[], chunkSize: number): ISummoned[][] => {
		const shuffledArray = shuffleArray(array);
		const chunks: ISummoned[][] = [];

		for (let i = 0; i < shuffledArray.length; i += chunkSize) {
			const chunk = shuffledArray.slice(i, i + chunkSize);
			chunks.push(chunk);
		}

		return chunks;
	};

	const createGroups = async () => {
		try {
			const summonedTitular = summoned.filter((sum) => sum.type === 'titular');
			const groupsOfFour = groupIntoChunks(summonedTitular, 4);

			const data = {
				idSeason: currentDay?.idSeason,
				idMatch: currentDay?.id,
				groups: JSON.stringify(groupsOfFour),
			};

			console.log(data);
			await localApi.post('/announcement/setGroups', data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLeaveMatch = async () => {
		try {
			setLoading(true);

			const athlete = summoned.find(({ idAthlete }) => user?.id === idAthlete);

			console.log(athlete);
			const { data: respSummoned } = await localApi.delete('/announcement/deleteSummoned', {
				data: athlete,
			});

			message?.success(respSummoned.message);

			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	const handleJoinMatch = async () => {
		try {
			setLoading(true);
			const summoned = {
				idSeason: currentDay?.idSeason,
				idMatch: currentDay?.id,
				idAthlete: user?.id,
			};
			const { data: respSummoned } = await localApi.post<IResponseSummoned>(
				'/announcement/setSummoned',
				summoned,
			);

			message?.success(respSummoned.message);

			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return {
		now,
		currentDay,
		createGroups,
		handleLeaveMatch,
		handleJoinMatch,
	};
};

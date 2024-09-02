import { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);

import { ButtonCustom } from '@/components/ui/components';
import { ConvocatoriaIcon } from '@/icons';
import { getDateMatchDay, getSummoned } from '../helpers';
import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { localApi } from '@/axios';
import { CountDown, TablaSummoned } from './';
import { IResponseSummoned } from '../interfaces';

export const Announcement = () => {
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const {
		summoned,
		setSummoned,
		currentDay,
		setCurrentDay,
		setTimeLeft,
		convocationDates,
		setConvocationDates,
	} = useStoreSummoned();

	const now = dayjs().utcOffset(0, true);

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
			const matchDate = dayjs.utc(date);

			setConvocationDates({ callDate, callEndDate, groupDate });

			if (dayjs().utcOffset(0, true).isBefore(callDate)) {
				const updateCountdown = () => {
					const now = dayjs().utcOffset(0, true);
					const difference = callDate.diff(now);

					const duration = dayjs.duration(difference);

					setTimeLeft({
						hours: duration.hours(),
						minutes: duration.minutes(),
						seconds: duration.seconds(),
					});
				};

				const intervalId = setInterval(updateCountdown, 1000);
				return () => clearInterval(intervalId); // Cleanup interval on component unmount
			} else if (
				dayjs().utcOffset(0, true).isAfter(callEndDate) &&
				dayjs().utcOffset(0, true).isBefore(groupDate)
			) {
				const updateCountdown = () => {
					const now = dayjs().utcOffset(0, true);
					const difference = matchDate.diff(now);

					const duration = dayjs.duration(difference);

					setTimeLeft({
						hours: duration.hours(),
						minutes: duration.minutes(),
						seconds: duration.seconds(),
					});
				};

				const intervalId = setInterval(updateCountdown, 1000);
				return () => clearInterval(intervalId); // Cleanup interval on component unmount
			} else {
				setTimeLeft({
					hours: 0,
					minutes: 0,
					seconds: 0,
				});
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [setCurrentDay, setLoading, setTimeLeft, setConvocationDates]);

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
			console.log(respSummoned.data);
			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchGetDateMatchDay();
	}, [fetchGetDateMatchDay]);

	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<ConvocatoriaIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Convocatoria</h2>
			</div>

			<div className="space-y-8 md:space-y-14">
				{now.isAfter(convocationDates?.callDate) &&
				now.isBefore(convocationDates?.callEndDate) ? (
					<ButtonCustom
						type="primary"
						className="w-full h-[250px] rounded-xl md:h-[353px]"
						color="#609D56"
						onClick={handleJoinMatch}
					>
						Unirme
					</ButtonCustom>
				) : (
					<CountDown />
				)}

				<TablaSummoned handleJoinMatch={handleJoinMatch} />
			</div>
		</div>
	);
};

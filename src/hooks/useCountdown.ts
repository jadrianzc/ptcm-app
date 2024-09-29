import { useEffect, useState } from 'react';

import { dayjs } from '@/libs';
import { ICountdown } from '@/components/admin';
import { useStoreLoading, useStoreSummoned } from '@/store';

// Hook personalizado para manejar el contador
export const useCountdown = () => {
	const { setLoading } = useStoreLoading();
	const { convocationDates } = useStoreSummoned();
	const [timeLeft, setTimeLeft] = useState<ICountdown | null>(null);

	useEffect(() => {
		const timer = setInterval(() => {
			const now = dayjs().utcOffset(0, true);

			const difference = dayjs().utcOffset(0, true).isBefore(convocationDates?.callDate)
				? convocationDates?.callDate?.diff(now)
				: dayjs().utcOffset(0, true).isAfter(convocationDates?.callDate) &&
				  dayjs().utcOffset(0, true).isBefore(convocationDates?.groupDate)
				? convocationDates?.groupDate?.diff(now)
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
		}, 1000);

		return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
	}, [convocationDates, setLoading, setTimeLeft]);

	return { timeLeft };
};

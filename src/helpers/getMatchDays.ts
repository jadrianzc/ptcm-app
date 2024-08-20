import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const getMatchDays = (days: number, startAt: string) => {
	const daysOfWeek = [1, 2, 3, 4]; // 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
	const selectedDates = [];
	const selectedDatesThursday = [];
	const targetHour = 20; // La hora deseada (20 para 8 PM)
	const targetMinute = 30; // El minuto deseado (30 para 30 minutos)
	let currentDate = dayjs(startAt);

	while (selectedDates.length < days) {
		currentDate = currentDate.utcOffset(0, false).add(1, 'day');
		const dayOfWeek = currentDate.day();

		if (daysOfWeek.includes(dayOfWeek)) {
			const adjustedDate = currentDate
				.hour(targetHour)
				.minute(targetMinute)
				.second(0)
				.millisecond(0);
			selectedDates.push(adjustedDate.toISOString());

			if (dayOfWeek === 4) {
				const adjustedDate = currentDate.hour(21).minute(30).second(0).millisecond(0);
				selectedDatesThursday.push(adjustedDate.toISOString());
			}
		}
	}

	const dates = [...selectedDates, ...selectedDatesThursday];
	const sortedDates = dates.sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1));

	return sortedDates;
};

import dayjs from 'dayjs';

export const getMatchDays = (days: number) => {
	const daysOfWeek = [1, 3, 4]; // 1 = Lunes, 3 = Miércoles, 4 = Jueves
	const selectedDates = [];
	let currentDate = dayjs();

	while (selectedDates.length < days) {
		currentDate = currentDate.add(1, 'day');
		const dayOfWeek = currentDate.day();

		if (daysOfWeek.includes(dayOfWeek)) {
			selectedDates.push(currentDate.format('YYYY-MM-DD'));
		}
	}

	return selectedDates;
};

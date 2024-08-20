import dayjs from 'dayjs';

export const getSeasonEndDay = (days: number, startAt: string): string => {
	const daysOfWeek = [1, 2, 3, 4]; // 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
	const newJordanas = [];
	const newJordanasThursday = [];
	let currentDate = dayjs(startAt);

	while (newJordanas.length < days) {
		// Incrementa los días en 1
		currentDate = currentDate.utcOffset(0, false).add(1, 'day');

		// Obtiene el número de días de la semana donde 0 = domingo, 1 = lunes...
		const dayOfWeek = currentDate.day();

		if (daysOfWeek.includes(dayOfWeek)) {
			// Jornadas normales
			newJordanas.push(currentDate.toISOString());

			// Valida la segunda jornada de los jueves
			if (dayOfWeek === 4) {
				newJordanasThursday.push(currentDate.toISOString());
			}
		}
	}

	const dates = [...newJordanas, ...newJordanasThursday];
	const sortedDates = dates.sort((a, b) => (dayjs(a).isBefore(dayjs(b)) ? 1 : -1));

	return sortedDates[0];
};

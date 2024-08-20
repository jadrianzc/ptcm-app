import { IAddJornadaDB } from '@/components/admin/interfaces';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { v4 as uuidv4 } from 'uuid';
import { IDataMatchDays } from './interfaces';

dayjs.extend(utc);

export const getMatchDays = ({ idSeason, days, startAt }: IDataMatchDays): IAddJornadaDB[] => {
	const daysOfWeek = [1, 2, 3, 4]; // 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
	const newJordanas: IAddJornadaDB[] = [];
	const newJordanasThursday: IAddJornadaDB[] = [];
	const targetHour = 20; // La hora deseada (20 para 8 PM)
	const targetMinute = 30; // El minuto deseado (30 para 30 minutos)
	let currentDate = dayjs(startAt);

	while (newJordanas.length < days) {
		// Incrementa los días en 1
		currentDate = currentDate.utcOffset(0, false).add(1, 'day');

		// Obtiene el número de días de la semana donde 0 = domingo, 1 = lunes...
		const dayOfWeek = currentDate.day();

		if (daysOfWeek.includes(dayOfWeek)) {
			// Jornadas normales
			const adjustedDate = currentDate
				.hour(targetHour)
				.minute(targetMinute)
				.second(0)
				.millisecond(0);

			newJordanas.push({
				id: uuidv4(),
				idSeason,
				name: `Fecha ${newJordanas.length + 1} ${dayOfWeek === 4 ? '(a)' : ''}`.trim(),
				startAt: adjustedDate.toISOString(),
			});

			// Valida la segunda jornada de los jueves
			if (dayOfWeek === 4) {
				const adjustedDate = currentDate.hour(21).minute(30).second(0).millisecond(0);

				newJordanasThursday.push({
					id: uuidv4(),
					idSeason,
					name: `Fecha ${newJordanas.length} ${dayOfWeek === 4 ? '(b)' : ''}`.trim(),
					startAt: adjustedDate.toISOString(),
				});
			}
		}
	}

	const dates = [...newJordanas, ...newJordanasThursday];
	const sortedDates = dates.sort((a, b) => (dayjs(a.startAt).isAfter(dayjs(b.startAt)) ? 1 : -1));

	return sortedDates;
};

import { IAddJornadaDB, IAddSeasonDB } from '@/components/admin/interfaces';

export interface ISeasonStore {
	// State
	seasons: IAddSeasonDB[];
	matchDays: IAddJornadaDB[];
	upcomingDates: number;
	completedDates: number;

	// Actions
	setSeason: (state: IAddSeasonDB[]) => void;
	setMatchDay: (state: IAddJornadaDB[]) => void;
	setUpcomingDates: (state: number) => void;
	setCompletedDates: (state: number) => void;
}

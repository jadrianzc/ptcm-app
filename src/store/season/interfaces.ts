import { IAddJornadaDB, IAddSeasonDB, ICategories } from '@/components/admin/interfaces';
import { ITableAthete } from '@/components/admin/members/interfaces/interface_members';

export interface ISeasonStore {
	// State
	seasons: IAddSeasonDB[];
	matchDays: IAddJornadaDB[];
	athetes: ITableAthete[];
	categories: ICategories[];
	upcomingDates: number;
	completedDates: number;

	// Actions
	setSeason: (state: IAddSeasonDB[]) => void;
	setMatchDay: (state: IAddJornadaDB[]) => void;
	setAthetes: (state: ITableAthete[]) => void;
	setCategories: (state: ICategories[]) => void;
	setUpcomingDates: (state: number) => void;
	setCompletedDates: (state: number) => void;
}

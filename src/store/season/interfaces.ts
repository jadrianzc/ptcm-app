import { IAddJornadaDB, IAddSeasonDB } from '@/components/admin/interfaces';

export interface ISeasonStore {
	// State
	seasons: IAddSeasonDB[];
	matchDays: IAddJornadaDB[];

	// Actions
	setSeason: (state: IAddSeasonDB[]) => void;
	setMatchDay: (state: IAddJornadaDB[]) => void;
}

import { IAddJornadaDB } from '@/components/admin';
import { IConvocationDates, IGroupItems, ISummoned } from '@/components/announcement/interfaces';

export interface ISummonedStore {
	// State
	summoned: ISummoned[];
	currentDay: IAddJornadaDB | null;
	convocationDates: IConvocationDates | null;
	groups: IGroupItems[][];

	// Actions
	setSummoned: (state: ISummoned[]) => void;
	setCurrentDay: (state: IAddJornadaDB | null) => void;
	setConvocationDates: (state: IConvocationDates | null) => void;
	setGroups: (state: IGroupItems[][]) => void;
}

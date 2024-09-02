import { IAddJornadaDB, ICountdown } from '@/components/admin';
import { IConvocationDates, ISummoned } from '@/components/announcement/interfaces';

export interface ISummonedStore {
	// State
	summoned: ISummoned[];
	currentDay: IAddJornadaDB | null;
	timeLeft: ICountdown | null;
	convocationDates: IConvocationDates | null;

	// Actions
	setSummoned: (state: ISummoned[]) => void;
	setCurrentDay: (state: IAddJornadaDB | null) => void;
	setTimeLeft: (state: ICountdown | null) => void;
	setConvocationDates: (state: IConvocationDates | null) => void;
}

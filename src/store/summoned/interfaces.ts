import { ISummoned } from '@/components/announcement/interfaces';

export interface ISummonedStore {
	// State
	summoned: ISummoned[];

	// Actions
	setSummoned: (state: ISummoned[]) => void;
}

import { create } from 'zustand';
import { ISummonedStore } from './interfaces';

export const useStoreSummoned = create<ISummonedStore>()((set) => ({
	summoned: [],
	currentDay: null,
	convocationDates: null,
	groups: [],

	setSummoned: (summoned) => set({ summoned }),
	setCurrentDay: (currentDay) => set({ currentDay }),
	setConvocationDates: (convocationDates) => set({ convocationDates }),
	setGroups: (groups) => set({ groups }),
}));

import { create } from 'zustand';
import { ISummonedStore } from './interfaces';

export const useStoreSummoned = create<ISummonedStore>()((set) => ({
	summoned: [],
	currentDay: null,
	timeLeft: null,
	convocationDates: null,

	setSummoned: (summoned) => set({ summoned }),
	setCurrentDay: (currentDay) => set({ currentDay }),
	setTimeLeft: (timeLeft) => set({ timeLeft }),
	setConvocationDates: (convocationDates) => set({ convocationDates }),
}));

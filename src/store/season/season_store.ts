import { createRef } from 'react';
import { create } from 'zustand';
import { ISeasonStore } from './interfaces';

// Referencia de modal Season
let refModalOC = createRef<boolean>() as React.MutableRefObject<null>;
refModalOC.current = null;

export const useStoreSeason = create<ISeasonStore>()((set) => ({
	seasons: [],
	matchDays: [],
	athetes: [],
	categories: [],
	upcomingDates: 0,
	completedDates: 0,

	setSeason: (seasons) => set({ seasons }),
	setMatchDay: (matchDays) => set({ matchDays }),
	setUpcomingDates: (upcomingDates) => set({ upcomingDates }),
	setCompletedDates: (completedDates) => set({ completedDates }),
	setAthetes: (athetes) => set({ athetes }),
	setCategories: (categories) => set({ categories }),
}));

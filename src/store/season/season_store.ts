import { createRef } from 'react';
import { create } from 'zustand';
import { ISeasonStore } from './interfaces';

// Referencia de modal Órden Compra
let refModalOC = createRef<boolean>() as React.MutableRefObject<null>;
refModalOC.current = null;

export const useStoreModal = create<ISeasonStore>()((set) => ({
	seasons: [],
	matchDays: [],

	setSeason: (seasons) => set({ seasons }),
	setMatchDay: (matchDays) => set({ matchDays }),
}));

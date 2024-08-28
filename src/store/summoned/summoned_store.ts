import { create } from 'zustand';
import { ISummonedStore } from './interfaces';

export const useStoreSummoned = create<ISummonedStore>()((set) => ({
	summoned: [],

	setSummoned: (summoned) => set({ summoned }),
}));

import { create } from 'zustand';
import { ILoaderStore } from './interfaces';

export const useStoreLoading = create<ILoaderStore>()((set) => ({
	loading: false,

	setLoading: (loading) => set({ loading }),
}));

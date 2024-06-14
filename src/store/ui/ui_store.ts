import { create } from 'zustand';

interface IUIStore {
	// State
	isDrawer: boolean;
	typeDrawer: number;

	// Actions
	openDrawer: () => void;
	closeDrawer: () => void;
	toggleDrawer: () => void;
	changeTypeDrawer: (type: number) => void;
}

export const useStoreUI = create<IUIStore>()((set) => ({
	isDrawer: false,
	typeDrawer: 0,

	openDrawer: () => set({ isDrawer: true }),
	closeDrawer: () => set({ isDrawer: false }),
	toggleDrawer: () => set((state) => ({ isDrawer: !state.isDrawer })),
	changeTypeDrawer: (type) => set({ typeDrawer: type }),
}));

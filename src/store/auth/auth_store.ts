import { create } from 'zustand';
import { IAuthStore } from './interfaces';

export const useStoreAuth = create<IAuthStore>()((set) => ({
	user: null,

	login: (user) => set({ user }),
	logout: () => set({ user: null }),
}));

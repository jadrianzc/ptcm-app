import { create } from 'zustand';
import { IAuthState } from './interfaces';

export const useAuthStore = create<IAuthState>()((set) => ({
	user: null,
	setUser: (userData) => set(() => ({ user: userData })),
}));

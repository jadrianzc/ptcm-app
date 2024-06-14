import { create } from 'zustand';
import { IMessageStore } from './interfaces';

export const useStoreMessage = create<IMessageStore>()((set) => ({
	message: null,

	setMessageApi: (message) => set({ message }),
}));

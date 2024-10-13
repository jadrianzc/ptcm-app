import { createRef } from 'react';
import { create } from 'zustand';
import { IModalStore } from './interfaces';

// Referencia de modal Órden Compra
let refModalOC = createRef<boolean>() as React.MutableRefObject<null>;
refModalOC.current = null;

export const useStoreModal = create<IModalStore>()((set) => ({
	isModalSeason: false,
	isDrawer: false,
	isPopover: false,

	setIsSeason: (isModalSeason) => set({ isModalSeason }),
	setIsDrawer: (isDrawer) => set({ isDrawer }),
	setIsPopover: (isPopover) => set({ isPopover }),
}));

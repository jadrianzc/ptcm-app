import { createRef } from 'react';
import { create } from 'zustand';
import { IModalStore } from './interfaces';

// Referencia de modal Órden Compra
let refModalOC = createRef<boolean>() as React.MutableRefObject<null>;
refModalOC.current = null;

export const useStoreModal = create<IModalStore>()((set) => ({
	isModalOpenOC: false,
	refModalOC,
	showFilesOC: true,

	setIsModalOpenOC: (isModalOpenOC) => set({ isModalOpenOC }),
	setShowFilesOC: (showFilesOC) => set({ showFilesOC }),
}));

import { create } from 'zustand';
import { IOrdenCompraStore } from './interfaces';

export const useStoreOrdenCompra = create<IOrdenCompraStore>()((set) => ({
	ordenCompra: [],
	currentOrdenCompra: null,
	stateOrdenCompra: [],
	areas: [],
	departments: [],
	costCenters: [],
	providers: [],

	setOrdenCompra: (ordenCompra) => set({ ordenCompra }),
	setCurrentOrdenCompra: (currentOrdenCompra) => set({ currentOrdenCompra }),
	setStateOrdenCompra: (stateOrdenCompra) => set({ stateOrdenCompra }),
	setProviders: (providers) => set({ providers }),
}));

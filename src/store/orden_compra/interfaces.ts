import {
	IAreas,
	IOrdenCompra,
	IProviders,
	IStateOrdenCompra,
	onlyDepCostArea,
} from '@/components/orden_compra/interfaces';

export interface IOrdenCompraStore {
	// State
	ordenCompra: IOrdenCompra[] | [];
	currentOrdenCompra: IOrdenCompra | null;
	stateOrdenCompra: IStateOrdenCompra[] | [];
	areas: IAreas[];
	departments: onlyDepCostArea[];
	costCenters: onlyDepCostArea[];
	providers: IProviders[];

	// Actions
	setOrdenCompra: (ordenCompra: IOrdenCompra[]) => void;
	setCurrentOrdenCompra: (ordenCompra: IOrdenCompra | null) => void;
	setStateOrdenCompra: (state: IStateOrdenCompra[]) => void;
	setProviders: (provider: IProviders[]) => void;
}

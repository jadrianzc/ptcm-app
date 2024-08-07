export interface IModalStore {
	// State
	isDrawer: boolean;

	// Actions
	setIsDrawer: (state: boolean) => void;
}

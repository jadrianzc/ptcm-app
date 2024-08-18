export interface IModalStore {
	// State
	isModalSeason: boolean;
	isDrawer: boolean;

	// Actions
	setIsSeason: (state: boolean) => void;
	setIsDrawer: (state: boolean) => void;
}

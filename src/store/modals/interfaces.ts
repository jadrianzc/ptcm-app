export interface IModalStore {
	// State
	isModalSeason: boolean;
	isDrawer: boolean;
	isPopover: boolean;

	// Actions
	setIsSeason: (state: boolean) => void;
	setIsDrawer: (state: boolean) => void;
	setIsPopover: (state: boolean) => void;
}

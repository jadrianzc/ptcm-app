export interface IModalStore {
	// State
	isModalOpenOC: boolean;
	refModalOC: React.MutableRefObject<null>;
	showFilesOC: boolean;

	// Actions
	setIsModalOpenOC: (state: boolean) => void;
	setShowFilesOC: (state: boolean) => void;
}

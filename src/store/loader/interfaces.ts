export interface ILoaderStore {
	// State
	loading: boolean;

	// Actions
	setLoading: (state: boolean) => void;
}

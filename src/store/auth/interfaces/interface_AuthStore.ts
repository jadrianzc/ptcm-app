export interface IAuthState {
	user: string | null;

	setUser: (user: string) => void;
}

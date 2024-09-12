export interface IAuthStore {
	// State
	user: IUser | null;

	// Actions
	login: (user: IUser) => void;
	logout: () => void;
}

export interface IUser {
	id: string;
	identification: string;
	name: string;
	lastname: string;
	email: string;
	password: string;
	idRol: number;
	nameRol: string;
}

export interface IResponseUser {
	status: number;
	message: string;
}

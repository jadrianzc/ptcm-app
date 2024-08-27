export interface IAuthStore {
	// State
	user: IUser | null;
	roles: number[];

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
}

export interface IResponseUser {
	status: number;
	message: string;
}

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
	name: string;
	last_name: string;
	fullName: string;
	identificacion: string;
	email: string;
	id_empresa: number;
	name_empresa: string;
	id_cargo: number;
	name_cargo: string;
	id_centro: number;
	name_centro: string;
	activo: string;
	jefe: string | null;
	start_date: string;
	end_date: string | null;
}

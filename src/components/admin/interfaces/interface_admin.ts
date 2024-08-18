export interface ICountdown {
	hours: number;
	minutes: number;
	seconds: number;
}

export interface IAddSeasonDB {
	id: string;
	name: string;
	matchdays: number;
	startAt: string;
	endAt: string;
	createAt?: string;
	updateAt?: string;
}

export interface IAddSeason {
	name: string;
	matchdays: number;
	dateMatches: any[];
}

export interface IAddJornadaDB {
	id: string;
	idSeason: string;
	name: string;
	startAt: string;
	createAt?: string;
	updateAt?: string;
}

export interface IResponseSetSesion {
	status: number;
	message: string;
	data?: IAddSeasonDB;
}

export interface IResponseUnauthorized {
	status: number;
	error: string;
}

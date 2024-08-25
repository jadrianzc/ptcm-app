import { Dayjs } from 'dayjs';

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
	dateMatches: Date;
	startAt: string | Dayjs;
	endAt: string | Dayjs;
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
	data: IAddSeasonDB[];
}

export interface IResponseSetMatchDays {
	status: number;
	message: string;
	data: IAddJornadaDB[];
	upcomingDates: number;
	completed: number;
}

export interface IResponseUnauthorized {
	status: number;
	error: string;
}

export interface IRespSeason {
	respSeason: IResponseSetSesion;
}

export interface IRespMatchDays {
	respMatchDays: IResponseSetMatchDays;
}

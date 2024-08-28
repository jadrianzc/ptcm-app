import { IAddJornadaDB } from '@/components/admin/interfaces';

export interface ICountdown {
	hours: number;
	minutes: number;
	seconds: number;
}

export interface IResponseCallDate {
	status: number;
	message?: string;
	data?: IAddJornadaDB;
}

export interface ISummoned {
	id: string;
	idSeason: string;
	idMatch: string;
	idAthlete: string;
	type: string;
	fullname?: string;
}

export interface IResponseSummoned {
	status: number;
	message: string;
	data: ISummoned[];
}

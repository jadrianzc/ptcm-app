import { IAddJornadaDB } from '@/components/admin/interfaces';
import { Dayjs } from 'dayjs';

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

export interface IConvocationDates {
	callDate?: Dayjs | null;
	callEndDate?: Dayjs | null;
	groupDate?: Dayjs | null;
}

export interface IGroups {
	id: string;
	idSeason: string;
	idMatch: string;
	groups: IGroupItems[] | string;
	createAt: string;
	updateAt: string;
}

export interface IGroupItems {
	id: string;
	idSeason: string;
	idMatch: string;
	idAthlete: string;
	type: string;
	createAt: string;
	updateAt: string;
	fullname: string;
}

export interface IResponseGroup {
	status: number;
	message: string;
	data: IGroups[];
}

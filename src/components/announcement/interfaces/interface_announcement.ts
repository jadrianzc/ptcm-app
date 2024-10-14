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
	category: number;
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

export interface IGroupsDB {
	id: string;
	name: string;
	idSeason: string;
	idMatch: string;
	idCancha: number;
	idPlayer: string;
	player: string;
	category: string;
	createAt: string;
	updateAt: string;
}

export interface IGroups {
	id: string;
	name: string;
	idSeason: string;
	idMatch: string;
	idCancha: number;
	groups: IGroupItems[];
	matches: ViewPartidos[];
	createAt: string;
	updateAt: string;
}

export interface IGroupItems {
	idPlayer: string;
	player: string;
	category: string;
	createAt: string;
	updateAt: string;
}

export interface IResponseGroup {
	status: number;
	message: string;
	data: IGroups[];
}

export interface IMatches {
	id: string;
	idGroup: string;
	name: string;
	idPlayerA1: string;
	idPlayerA2: string;
	idPlayerB1: string;
	idPlayerB2: string;
}

export interface ViewPartidos {
	id: string;
	idGroup: string;
	idCancha: number;
	name: string;
	idPlayerA1: string;
	namePlayerA1: string;
	idPlayerA2: string;
	namePlayerA2: string;
	resultA: number;
	idPlayerB1: string;
	namePlayerB1: string;
	idPlayerB2: string;
	namePlayerB2: string;
	resultB: number;
	createAt: string;
	updateAt: string;
}

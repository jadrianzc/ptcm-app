export interface ICountdown {
	hours: number;
	minutes: number;
	seconds: number;
}

export interface IResponseCallDate {
	status: number;
	message?: string;
	data: string;
}

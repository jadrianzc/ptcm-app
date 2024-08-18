import axios from 'axios';

export const localApi = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_APP_URL}/api`,
});

localApi.defaults.headers.common['Authorization'] = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

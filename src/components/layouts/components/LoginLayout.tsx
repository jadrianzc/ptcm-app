import Head from 'next/head';
import { Raleway } from 'next/font/google';
import { IWrapperComponent } from '../interfaces';
import { useAuthStore } from '@/store/auth';

const raleway = Raleway({ subsets: ['latin'] });

export const LoginLayout: React.FC<IWrapperComponent> = ({ children }) => {
	const { user, setUser } = useAuthStore();

	const setUserLogin = () => {
		setUser('Juan');
	};

	console.log(user);

	return (
		<>
			<Head>
				<title>Padel</title>
				<meta name="description" content="Padel" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={`${raleway.className} h-screen bg-slate-500  font-bold`}>
				{children}
			</main>
		</>
	);
};

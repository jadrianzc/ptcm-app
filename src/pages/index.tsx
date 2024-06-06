import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const HomePage = () => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			Hola
		</main>
	);
};

export default HomePage;

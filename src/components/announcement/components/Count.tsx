import { useStoreSummoned } from '@/store';
import { ICountdown } from '../interfaces';

interface IProps {
	isGroup?: boolean;
	timeLeft: ICountdown | null;
}

export const Count = ({ isGroup, timeLeft }: IProps) => {
	const { currentDay } = useStoreSummoned();

	return (
		<>
			<span className="text-xs font-light md:text-xl">Atleta, faltan</span>

			<div className="flex justify-center items-center font-extrabold space-x-[15px] md:space-x-[45px]">
				<div className="flex flex-col justify-center items-center">
					<div className="text-5xl font-semibold md:text-[80px]">{timeLeft?.hours}</div>
					<div className="text-xs text-skyBlue uppercase md:text-xl">horas</div>
				</div>
				<span className="text-skyBlue text-5xl font-semibold md:text-[80px]">:</span>
				<div className="flex flex-col justify-center items-center">
					<div className="text-5xl font-semibold md:text-[80px]">{timeLeft?.minutes}</div>
					<div className="text-xs text-skyBlue uppercase md:text-xl">minutos</div>
				</div>
				<span className="text-skyBlue text-5xl font-semibold md:text-[80px]">:</span>
				<div className="flex flex-col justify-center items-center">
					<div className="text-5xl font-semibold md:text-[80px]">{timeLeft?.seconds}</div>
					<div className="text-xs text-skyBlue uppercase md:text-xl">segundos</div>
				</div>
			</div>

			<span className="text-xs font-light md:text-xl">
				{!!isGroup ? (
					<>
						Para conocer los grupos de la{' '}
						<strong className="font-bold">{currentDay?.name}</strong>
					</>
				) : (
					<>
						Para el inicio de la convocatoria{' '}
						<strong className="font-bold">{currentDay?.name}</strong>
					</>
				)}
			</span>
		</>
	);
};

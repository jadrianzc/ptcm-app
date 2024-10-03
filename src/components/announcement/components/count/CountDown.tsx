import { ClockLoader } from 'react-spinners';

import { dayjs } from '@/libs';
import { useStoreSummoned } from '@/store';
import { Count, CountShow } from '..';
import { ICountdown } from '../../interfaces';

interface IProps {
	isGroup?: boolean;
	timeLeft?: ICountdown | null;
}

export const CountDown = ({ isGroup = false, timeLeft }: IProps) => {
	// Hooks
	const { currentDay, convocationDates } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);
	const condition = isGroup
		? now.isAfter(convocationDates?.callEndDate) && now.isBefore(convocationDates?.groupDate)
		: now.isBefore(convocationDates?.callDate);

	return (
		<div className="bg-white h-[250px] rounded-xl md:h-[353px]">
			<div className="h-full flex justify-center items-center">
				{currentDay !== undefined ? (
					<div>
						{timeLeft ? (
							<div className="flex flex-col justify-center items-center text-blue space-y-6">
								{condition ? (
									<Count isGroup={isGroup} timeLeft={timeLeft} />
								) : (
									<CountShow isGroup={isGroup} />
								)}
							</div>
						) : (
							<div className="h-full flex justify-center items-center">
								<ClockLoader color="#146586" />
							</div>
						)}
					</div>
				) : (
					<span className="text-blue text-xl font-semibold text-center md:text-4xl">
						Atleta, hoy no hay convocatoria
					</span>
				)}
			</div>
		</div>
	);
};

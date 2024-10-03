import { dayjs } from '@/libs';
import { useStoreSummoned } from '@/store';
import { GroupList } from './';
import { CountDown } from '@/components/announcement';
import { GruposIcon } from '@/icons';
import { useCountdown } from '@/hooks';

export const Groups = () => {
	const { convocationDates } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	const { timeLeft } = useCountdown();

	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<GruposIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Grupos</h2>
			</div>

			<div className="space-y-8 md:space-y-14">
				{now.isAfter(convocationDates?.groupDate) ? (
					<GroupList />
				) : (
					<CountDown isGroup timeLeft={timeLeft} />
				)}
			</div>
		</div>
	);
};

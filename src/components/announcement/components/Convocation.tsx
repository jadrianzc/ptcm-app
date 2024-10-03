import { ButtonCustom } from '@/components/ui/components';
import { CountDown, TablaSummoned } from './';
import { useCountdown, useDateMatchday } from '@/hooks';
import { dayjs } from '@/libs';
import { useStoreSummoned } from '@/store';

export const Convocation = () => {
	const { handleJoinMatch } = useDateMatchday();
	const { convocationDates } = useStoreSummoned();
	const now = dayjs().utcOffset(0, true);

	const { timeLeft } = useCountdown();

	return (
		<div className="space-y-8 md:space-y-14">
			{now.isAfter(convocationDates?.callDate) &&
			now.isBefore(convocationDates?.callEndDate) ? (
				<>
					<ButtonCustom
						type="primary"
						className="w-full h-[250px] rounded-xl md:h-[353px]"
						color="#609D56"
						onClick={handleJoinMatch}
					>
						Unirme
					</ButtonCustom>

					<TablaSummoned />
				</>
			) : (
				<CountDown timeLeft={timeLeft} />
			)}
		</div>
	);
};

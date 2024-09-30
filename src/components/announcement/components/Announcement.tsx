import { dayjs } from '@/libs';
import { useDateMatchday } from '@/hooks';
import { useStoreSummoned } from '@/store';
import { ConvocatoriaIcon } from '@/icons';
import { CountDown, TablaSummoned } from './';
import { ButtonCustom } from '@/components/ui/components';

export const Announcement = () => {
	// Hooks
	const { handleJoinMatch } = useDateMatchday();
	const { convocationDates } = useStoreSummoned();

	// States
	const now = dayjs().utcOffset(0, true);

	// TODO: LLAMAR EL USECOUNTDOWN AQUÍ CON LA CONDICIÓN
	console.log(
		'Announcement',
		now.isAfter(convocationDates?.callDate) && now.isBefore(convocationDates?.callEndDate),
	);

	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<ConvocatoriaIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Convocatoria</h2>
			</div>

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
					<CountDown />
				)}
			</div>
		</div>
	);
};

import { useRouter } from 'next/router';

import { dayjs } from '@/libs';
import { ButtonCustom } from '@/components/ui/components';
import { useStoreSummoned } from '@/store';
import { useDateMatchday } from '@/hooks';

export const FooterTable = () => {
	const { pathname } = useRouter();
	const { currentDay } = useStoreSummoned();
	const { createGroups, handleLeaveMatch, handleJoinMatch } = useDateMatchday();

	return (
		<div className="hidden md:flex flex-col gap-6 md:flex-row">
			{pathname.includes('/admin') ? (
				<div className="flex flex-wrap gap-2">
					<ButtonCustom
						type="primary"
						className="w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first"
						color="#3F6380"
						onClick={createGroups}
					>
						Crear grupos
					</ButtonCustom>
				</div>
			) : (
				<>
					{dayjs().isBefore(currentDay?.startAt.split('Z')[0]) && (
						<div className="flex flex-wrap gap-2">
							<ButtonCustom
								type="primary"
								className="w-full md:w-[328px] h-[57px] rounded-md order-last md:order-first"
								color="#D14747"
								onClick={handleLeaveMatch}
							>
								Bajarme
							</ButtonCustom>

							<ButtonCustom
								type="primary"
								className="w-full md:w-[328px] h-[57px] rounded-md"
								color="#609D56"
								onClick={handleJoinMatch}
							>
								Unirme
							</ButtonCustom>
						</div>
					)}

					<div className="flex flex-col text-sm justify-center">
						<span className="w-fit text-gray3 border-gray3 md:border-b">
							Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
							multa.
						</span>
						<span className="w-fit text-gray4 border-gray4 md:border-b">
							Se agotó el tiempo para bajarte de la convocatoria sin multa. A partir
							de este momento la multa es la siguiente: --------
						</span>
					</div>
				</>
			)}
		</div>
	);
};

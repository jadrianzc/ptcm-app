import { ButtonCustom } from '@/components/ui/components';
import { useStoreSummoned } from '@/store';
import { useDateMatchday } from '@/hooks';

export const FooterTableMovil = () => {
	const { summoned } = useStoreSummoned();
	const { handleLeaveMatch, handleJoinMatch } = useDateMatchday();

	return (
		<>
			{summoned.length > 0 && (
				<div className="flex flex-col gap-6 md:flex-row md:hidden">
					<div className="flex flex-col text-sm justify-center px-2">
						<span className="w-fit text-gray3 border-gray3 md:border-b">
							Recuerda que tienes 00:00 horas para bajarte de la convocatoria sin
							multa.
						</span>
						<span className="w-fit text-gray4 border-gray4 md:border-b">
							Se agotó el tiempo para bajarte de la convocatoria sin multa. A partir
							de este momento la multa es la siguiente: --------
						</span>
					</div>

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
				</div>
			)}
		</>
	);
};

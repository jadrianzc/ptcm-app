import { useEffect } from 'react';

import { useStoreLoading, useStoreSeason } from '@/store';
import { getAllSeasons, getMatchByIdSeason } from '../helpers';
import { ModalAddSeason, SeasonList, SeasonDays } from './';
import { ConvocatoriaIcon } from '@/icons';

export const Season = () => {
	const { setLoading } = useStoreLoading();
	const {
		// Methods
		setSeason,
		setMatchDay,
		setUpcomingDates,
		setCompletedDates,
	} = useStoreSeason();

	// Cargar estado inicial de temporadas y jornadas
	useEffect(() => {
		const fetchGetSeason = async () => {
			setLoading(true);
			try {
				// Obtener sesión y actualizar estado
				const { respSeason } = await getAllSeasons();
				setSeason(respSeason.data);

				if (respSeason.data.length > 0) {
					// Obtener jornadas por idSeason y actualizar estado
					const { respMatchDays } = await getMatchByIdSeason(respSeason.data[0].id);
					setMatchDay(respMatchDays.data);
					setUpcomingDates(respMatchDays.upcomingDates);
					setCompletedDates(respMatchDays.completed);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchGetSeason();
	}, [setSeason, setLoading, setCompletedDates, setUpcomingDates, setMatchDay]);

	return (
		<>
			<ModalAddSeason />

			<div className="space-y-14">
				<div className="space-y-7">
					<div className="flex justify-start items-center space-x-5">
						<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
							<ConvocatoriaIcon className="w-5 h-5 md:w-6 md:h-6" />
						</div>
						<h2 className="text-xl text-blue font-medium md:text-3xl">
							Fechas y Temporadas
						</h2>
					</div>

					<div className="flex">
						<SeasonList />

						<SeasonDays />
					</div>
				</div>
			</div>
		</>
	);
};

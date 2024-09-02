import { IoMdAdd } from 'react-icons/io';

import { useStoreModal, useStoreSeason } from '@/store';
import { SeasonListItem } from './';
import { ButtonCustom } from '@/components/ui/components';

export const SeasonList = () => {
	const { setIsSeason } = useStoreModal();
	const { seasons } = useStoreSeason();

	const createSeason = () => setIsSeason(true);

	return (
		<div className="w-[284px] px-5 py-10 bg-white space-y-6 flex flex-col">
			<div className="flex justify-between items-center w-full h-[32px]">
				<p className="text-blue text-xl font-medium">Temporadas</p>
				<ButtonCustom type="text" onClick={createSeason}>
					<IoMdAdd className="w-5 h-5 text-gray" />
				</ButtonCustom>
			</div>

			<div className="w-full space-y-5 flex-grow">
				{seasons?.map((season, index) => (
					<SeasonListItem key={season.id} season={season} index={index} />
				))}
			</div>

			<div className="w-full h-[32px]">
				<ButtonCustom
					color="#146586"
					className="w-full h-[50px] text-sm text-blue font-medium border-blue not-italic"
					icon={<IoMdAdd className="w-5 h-5 text-blue" />}
					onClick={createSeason}
				>
					Crear Temporada
				</ButtonCustom>
			</div>
		</div>
	);
};

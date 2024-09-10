import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);

import { ButtonCustom } from '@/components/ui/components';
import { ConvocatoriaIcon } from '@/icons';
import { getDateMatchDay, getSummoned } from '../helpers';
import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { localApi } from '@/axios';
import { CountDown, TablaSummoned } from './';
import { IResponseSummoned, ISummoned } from '../interfaces';
import { useDateMatchday } from '@/hooks';

export const Announcement = () => {
	const { now } = useDateMatchday();
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { summoned, setSummoned, currentDay, convocationDates } = useStoreSummoned();

	const handleJoinMatch = async () => {
		try {
			setLoading(true);
			const summoned = {
				idSeason: currentDay?.idSeason,
				idMatch: currentDay?.id,
				idAthlete: user?.id,
			};
			const { data: respSummoned } = await localApi.post<IResponseSummoned>(
				'/announcement/setSummoned',
				summoned,
			);

			message?.success(respSummoned.message);

			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	// function shuffleArray(array: ISummoned[]): ISummoned[] {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 	}
	// 	return array;
	// }

	// function groupIntoChunks(array: ISummoned[], chunkSize: number): ISummoned[][] {
	// 	const shuffledArray = shuffleArray(array);
	// 	const chunks: ISummoned[][] = [];

	// 	for (let i = 0; i < shuffledArray.length; i += chunkSize) {
	// 		const chunk = shuffledArray.slice(i, i + chunkSize);
	// 		chunks.push(chunk);
	// 	}

	// 	return chunks;
	// }

	// const createGroups = async () => {
	// 	const summonedTitular = summoned.filter((sum) => sum.type === 'titular');
	// 	const groupsOfFour = groupIntoChunks(summonedTitular, 4);

	// 	const data = {
	// 		idSeason: currentDay?.idSeason,
	// 		idMatch: currentDay?.id,
	// 		groups: JSON.stringify(groupsOfFour),
	// 	};

	// 	console.log(data);
	// 	await localApi.post('/announcement/setGroups', data);
	// };

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

						<TablaSummoned handleJoinMatch={handleJoinMatch} />
					</>
				) : (
					<CountDown />
				)}

				{/* <ButtonCustom
					type='primary'
					className='w-full h-[250px] rounded-xl md:h-[353px]'
					color='#609D56'
					onClick={handleJoinMatch}>
					Unirme
				</ButtonCustom>

				<ButtonCustom
					type='primary'
					className='w-full h-[250px] rounded-xl md:h-[353px]'
					// color="#609D56"
					onClick={createGroups}>
					CREAR GRUPOS
				</ButtonCustom> */}

				{/* <CountDown /> */}
			</div>
		</div>
	);
};

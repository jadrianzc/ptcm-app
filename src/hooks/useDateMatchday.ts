import { localApi } from '@/axios';
import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import { IResponseSummoned, ISummoned } from '@/components/announcement/interfaces';

export const useDateMatchday = () => {
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { summoned, currentDay, setSummoned } = useStoreSummoned();

	// Toma un array y lo baraja aleatoriamente utilizando el algoritmo de Fisher-Yates (shuffle)
	const shuffleArray = (array: ISummoned[]): ISummoned[] => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	};

	// Agrupa los elementos del array en subarrays de tamaño chunkSize
	const groupIntoChunks = (array: ISummoned[], chunkSize: number): ISummoned[][] => {
		const shuffledArray = shuffleArray(array);
		const chunks: ISummoned[][] = [];

		for (let i = 0; i < shuffledArray.length; i += chunkSize) {
			const chunk = shuffledArray.slice(i, i + chunkSize);
			chunks.push(chunk);
		}

		return chunks;
	};

	// Creación de grupos
	const createGroups = async () => {
		try {
			const summonedTitular = summoned.filter((sum) => sum.type === 'titular');
			const groupsOfFour = groupIntoChunks(summonedTitular, 4);

			const data = {
				idSeason: currentDay?.idSeason,
				idMatch: currentDay?.id,
				groups: JSON.stringify(groupsOfFour),
			};

			await localApi.post('/announcement/setGroups', data);
		} catch (error) {
			console.log(error);
		}
	};

	// Darse de baja de la convocatoria
	const handleLeaveMatch = async () => {
		try {
			setLoading(true);

			const athlete = summoned.find(({ idAthlete }) => user?.id === idAthlete);

			const { data: respSummoned } = await localApi.delete('/announcement/deleteSummoned', {
				data: athlete,
			});

			message?.success(respSummoned.message);

			setSummoned(respSummoned.data);
		} catch (error: any) {
			console.log(error);
			message?.error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	// Unirse a la convocatoria
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

	return {
		currentDay,
		createGroups,
		handleLeaveMatch,
		handleJoinMatch,
	};
};

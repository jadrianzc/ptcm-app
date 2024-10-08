import { localApi } from '@/axios';
import { useStoreAuth, useStoreLoading, useStoreMessage, useStoreSummoned } from '@/store';
import {
	IGroupItems,
	IResponseGroup,
	IResponseSummoned,
	ISummoned,
} from '@/components/announcement/interfaces';

export const useDateMatchday = () => {
	const { user } = useStoreAuth();
	const { message } = useStoreMessage();
	const { setLoading } = useStoreLoading();
	const { summoned, currentDay, setSummoned, setGroups } = useStoreSummoned();

	// * Creación de grupos
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
			setLoading(true);
			const summonedTitular = summoned.filter((sum) => sum.type === 'titular');

			if (summonedTitular.length === 20 || summonedTitular.length === 24) {
				const groupsOfFour = groupIntoChunks(summonedTitular, 4);

				const data = {
					idSeason: currentDay?.idSeason,
					idMatch: currentDay?.id,
					groups: groupsOfFour,
				};

				const { data: respGroup } = await localApi.post<IResponseGroup>(
					'/announcement/setGroups',
					data
				);

				setGroups(respGroup.data);

				return;
			}

			message?.error('Faltan atletas para crear los grupos.');
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	// * Unirse a la convocatoria
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
				summoned
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

	// * Darse de baja de la convocatoria
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

	// * Generar los partidos por grupos
	// Obtiene todas las combinacione posibles
	const generarCombinations = (players: IGroupItems[]) => {
		const combinaciones = [];

		for (let i = 0; i < players.length; i++) {
			for (let j = i + 1; j < players.length; j++) {
				combinaciones.push([players[i], players[j]]);
			}
		}
		return combinaciones;
	};

	// Genera los partidos por grupo
	const generateMatches = (players: IGroupItems[]) => {
		const combinations = generarCombinations(players);
		const matches = [];

		for (let i = 0; i < combinations.length; i++) {
			const idElements = combinations[i].map((item) => item.id);
			const left = combinations[i];
			const right = [];

			for (let j = i + 1; j < combinations.length; j++) {
				// Verifica las parejas de las combinaciones
				const isLocated = combinations[j]?.some((item) => idElements.includes(item.id));

				if (!isLocated) right.push(...combinations[j]);
			}

			if (right.length > 0) {
				matches.push({
					left,
					right,
				});
			}
		}

		return matches;
	};

	return {
		currentDay,
		createGroups,
		handleJoinMatch,
		handleLeaveMatch,
		generateMatches,
	};
};

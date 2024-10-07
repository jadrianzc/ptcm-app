import { IGroupItems } from '@/components/announcement/interfaces';
import { FC } from 'react';

interface IGroupItem {
	players: IGroupItems[];
}

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
const generateMatches = (combinations: IGroupItems[][]) => {
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

export const MatchContainer: FC<IGroupItem> = ({ players }) => {
	const { idSeason, idMatch } = players[0];
	const combinations = generarCombinations(players);
	const matches = generateMatches(combinations);

	return (
		<div className='bg-white rounded-md p-[18px] space-y-5'>
			{matches.map((match, index) => (
				<div key={index} className='space-y-2'>
					<span className='text-base font-medium'>Partido {index + 1}</span>
					<div className='w-full flex justify-between items-center'>
						<div className='flex bg-[#E9F0F4] w-[220px]'>
							<div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match.left.map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div>
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
						</div>

						<div className='font-bold italic text-base'>VS</div>

						<div className='flex bg-[#E9F0F4] w-[220px]'>
							<div className='font-bold text-2xl flex items-center justify-center bg-[#43849E] text-white w-10 h-auto'>
								0
							</div>
							<div className='flex-1 flex flex-col justify-center items-center text-sm'>
								{match.right.map((player, iPlayer) => (
									<div
										key={player.id}
										className={`${
											iPlayer === 0 ? 'bg-[#EAF1F4]' : 'bg-[#f4f8f9]'
										} w-full text-center font-medium py-2`}>
										{player.fullname}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

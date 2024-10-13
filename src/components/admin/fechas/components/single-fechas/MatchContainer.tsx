import { Match } from '../';
import { ViewPartidos } from '@/components/announcement/interfaces';

interface IGroupItem {
	matches: ViewPartidos[];
}

export const MatchContainer = ({ matches }: IGroupItem) => {
	return (
		<div className="bg-white rounded-md p-[18px] space-y-5">
			{matches.map((match) => (
				<Match key={match.id} match={match} />
			))}
		</div>
	);
};

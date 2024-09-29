import { ISummoned } from '../interfaces';

interface IProps {
	summoneds: ISummoned[];
	type: string;
}

export const TableSummonedItem = ({ summoneds, type }: IProps) => {
	return (
		<div
			className={`w-auto h-full grid grid-cols-1 md:grid-flow-col gap-x-5 ${
				type === 'titular'
					? 'md:grid-rows-12 lg:grid-rows-10 xl:grid-rows-6'
					: 'md:grid-rows-6'
			}`}
		>
			{type !== 'titular' && (
				<div className={`border-b-2`}>
					<span className="text-blue text-base font-bold italic capitalize">{type}</span>
				</div>
			)}

			{summoneds.map((summoned, index) => (
				<div
					key={index}
					className={`text-sm flex justify-start md:justify-between items-center py-1 px-2 space-x-7 ${
						(index + 1) % 2 === 0 ? 'bg-tableContent' : ''
					}`}
				>
					<span className="text-gray4">{index + 1}</span>
					<span className="text-blue">{summoned?.fullname}</span>
				</div>
			))}
		</div>
	);
};

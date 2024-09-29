import { useStoreSummoned } from '@/store';
import { HeaderTable, TableSummonedItem, FooterTable, FooterTableMovil } from './';

export const TablaSummoned = () => {
	const { currentDay, summoned } = useStoreSummoned();

	return (
		<>
			{currentDay && (
				<>
					<div className="w-full h-auto bg-white rounded-xl px-5 py-6 space-y-5 shadow-sm">
						<HeaderTable />

						{summoned.length > 0 && (
							<>
								<div className="flex flex-col md:flex-row md:flex-wrap md:gap-5 2xl:gap-0">
									<TableSummonedItem
										summoneds={summoned.filter((row) => row.type === 'titular')}
										type="titular"
									/>

									<div className="w-full bg-tableContent my-3 border border-y-0 border-b-[3px] border-b-blue md:w-[26px] md:my-0 md:mx-3 md:border-r-[3px] md:border-r-blue md:border-b-0"></div>

									<TableSummonedItem
										summoneds={summoned.filter(
											(row) => row.type === 'suplente',
										)}
										type="suplentes"
									/>

									<div className="w-full bg-tableContent my-3 border border-y-0 border-b-[3px] border-b-blue md:w-[26px] md:my-0 md:mx-3 md:border-r-[3px] md:border-r-blue md:border-b-0"></div>

									<TableSummonedItem
										summoneds={summoned.filter(
											(row) => row.type === 'suplente 2',
										)}
										type="suplentes 2"
									/>
								</div>

								<FooterTable />
							</>
						)}
					</div>

					<FooterTableMovil />
				</>
			)}
		</>
	);
};

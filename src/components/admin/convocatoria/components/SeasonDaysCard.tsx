import { ButtonCustom } from '@/components/ui/components';
import { useStoreSeason } from '@/store';
import { Avatar, List } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { IoIosList } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
dayjs.locale('es');

export const SeasonDaysCard = () => {
	const { matchDays } = useStoreSeason();

	return (
		<div className="flex flex-wrap gap-[14px] items-center">
			<List
				itemLayout="horizontal"
				size="large"
				pagination={{
					// onChange: (page) => {
					// 	console.log(page);
					// },
					pageSize: 12,
				}}
				dataSource={matchDays}
				renderItem={(matchDay) => (
					<List.Item
						key={matchDay.id}
						// className="w-full lg:w-[40%] xl:w-[30%] !p-0"
					>
						<div className="w-[340px] h-[321px] bg-white rounded-lg border border-gray6 py-5 space-y-5">
							<div className="flex justify-between items-start px-6">
								<div
									className={`w-[102px] h-8 text-white text-[15px] font-normal flex justify-center items-center rounded-2xl ${
										dayjs().isAfter(dayjs(matchDay.startAt))
											? 'bg-greenLight'
											: 'bg-blue'
									}`}
								>
									{matchDay.name}
								</div>
								<ButtonCustom type="text" className="p-0 text-gray5 ">
									<IoEllipsisHorizontalSharp />
								</ButtonCustom>
							</div>
							<div className="space-y-4 px-6">
								<div className="text-[17px] font-medium">
									{dayjs(matchDay.startAt)
										.format('dddd DD MMMM')
										.replace(/^\w/g, (char) => char.toUpperCase())}
								</div>
								<div className="text-gray6 text-[15px] space-y-1">
									<p>
										{dayjs(matchDay.startAt)
											.utcOffset(0, false)
											.format('HH:mm')}
										- Padelmar
									</p>
									<p>
										<span className="font-medium italic">Modalidad: </span>
										Pareja rotativa por sorteo.
									</p>
									<p className="text-[11px] underline">
										Evita sanciones{' '}
										<span className="font-bold">lee el reglamento.</span>
									</p>
								</div>
								<div className="flex justify-start items-center space-x-4">
									<div className="bg-gray w-[102px] h-[40px] border border-gray6 rounded-lg text-gray7 flex justify-center items-center space-x-2">
										<IoIosList className="w-5 h-5" />
										<span>24/6</span>
									</div>

									<div className="bg-gray w-[125px] h-[32px] border border-gray6 rounded-2xl text-gray7 flex justify-center items-center space-x-2">
										<LuClock3 className="w-5 h-5" />
										<span className="text-[15px]">
											{dayjs(matchDay.startAt)
												.startOf('day')
												.diff(dayjs().startOf('day'), 'days') > 0
												? `En ${dayjs(matchDay.startAt)
														.startOf('day')
														.diff(dayjs().startOf('day'), 'days')} ${
														dayjs(matchDay.startAt)
															.startOf('day')
															.diff(
																dayjs().startOf('day'),
																'days',
															) === 1
															? 'día'
															: 'días'
												  }`
												: 'Finalizado'}
										</span>
									</div>
								</div>
							</div>
							<div className="border-t border-gray6 px-6 pt-2	">
								<Avatar.Group
									max={{
										count: 3,
										style: {
											color: '#fff',
											backgroundColor: '#146586',
										},
									}}
								>
									<Avatar style={{ backgroundColor: '#C7C6CB' }}>K</Avatar>
									<Avatar style={{ backgroundColor: '#C7C6CB' }}>K</Avatar>
									<Avatar style={{ backgroundColor: '#C7C6CB' }}>K</Avatar>
									<Avatar style={{ backgroundColor: '#C7C6CB' }}>K</Avatar>
								</Avatar.Group>
							</div>
						</div>
					</List.Item>
				)}
			/>
		</div>
	);
};

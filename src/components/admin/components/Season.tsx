import { useEffect } from 'react';
import { Avatar, Badge, Divider, List } from 'antd';
import { LuClock3 } from 'react-icons/lu';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { IoIosList, IoMdAdd } from 'react-icons/io';
import { useStoreModal, useStoreSeason } from '@/store';
import { ConvocatoriaIcon } from '@/icons';
import { ButtonCustom } from '@/components/ui/components';
import { ModalAddSeason } from './ModalAddSeason';
import { getSeasons } from '../helpers';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export const Season = () => {
	const { setIsSeason } = useStoreModal();
	const { seasons, matchDays, setSeason, setMatchDay } = useStoreSeason();

	const createSeason = () => {
		setIsSeason(true);
	};

	useEffect(() => {
		getSeasons()
			.then((resp) => {
				setSeason(resp.respSeason.data);
				setMatchDay(resp.respMatchDays.data);
			})
			.catch((err) => console.log(err));
	}, [setSeason, setMatchDay]);

	return (
		<>
			<ModalAddSeason />

			<div className='space-y-14'>
				<div className='space-y-7'>
					<div className='flex justify-start items-center space-x-5'>
						<div className='rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12'>
							<ConvocatoriaIcon className='w-5 h-5 md:w-6 md:h-6' />
						</div>
						<h2 className='text-xl text-blue font-medium md:text-3xl'>
							Fechas y Temporadas
						</h2>
					</div>

					<div className='flex'>
						<div>
							<div className='w-[284px] h-[1122px] px-5 py-10 bg-white space-y-6 flex flex-col'>
								<div className='flex justify-between items-center w-full h-[32px]'>
									<p className='text-blue text-xl font-medium'>Temporadas</p>
									<ButtonCustom type='text' onClick={createSeason}>
										<IoMdAdd className='w-5 h-5 text-gray' />
									</ButtonCustom>
								</div>

								<div className='w-full space-y-5 flex-grow'>
									{seasons?.map((season, index) => (
										<div
											key={season.id}
											className='w-full bg-gray flex justify-between items-center p-2 border rounded-lg'>
											<div className='text-white text-2xl font-black italic bg-blue w-11 h-11 rounded-full flex justify-center items-center'>
												<span className='mr-1'>{index + 1}</span>
											</div>

											<div className='flex flex-col justify-center items-start'>
												<span className='text-gray2 text-sm font-medium'>
													{season.name}
												</span>
												<span className='text-gray3 text-xs font-normal'>
													{`${season.matchdays} Fechas`}
												</span>
											</div>

											<Divider
												type='vertical'
												className='border-gray2 !h-[37px] md:!h-[27px]'
											/>

											<ButtonCustom type='text' className='p-0 text-gray5 '>
												<IoEllipsisHorizontalSharp />
											</ButtonCustom>
										</div>
									))}
								</div>

								<div className='w-full h-[32px]'>
									<ButtonCustom
										color='#146586'
										className='w-full h-[50px] text-sm text-blue font-medium border-blue not-italic'
										icon={<IoMdAdd className='w-5 h-5 text-blue' />}
										onClick={createSeason}>
										Crear Temporada
									</ButtonCustom>
								</div>
							</div>
						</div>

						<div className='flex-grow px-5 space-y-7'>
							<div className='flex justify-start items-center space-x-14'>
								<div className='text-base font-medium flex justify-center items-center space-x-[14px]'>
									<Badge color='#146586' text='Próximas Fechas' />
									<div className='bg-white border border-gray6 w-[42px] h-8 rounded-full flex justify-center items-center'>
										5
									</div>
								</div>

								<div className='text-base font-medium flex justify-center items-center space-x-[14px]'>
									<Badge color='#5ABB95' text='Completadas' />
									<div className='bg-white border border-gray6 w-[42px] h-8 rounded-full flex justify-center items-center'>
										1
									</div>
								</div>
							</div>

							<div>
								<ButtonCustom
									color='#146586'
									className='text-base font-medium not-italic w-[356px] h-[50px] text-blue border border-gray6'
									icon={<IoMdAdd className='w-5 h-5 text-blue' />}>
									Crear Nueva Fecha
								</ButtonCustom>
							</div>

							<div className='flex flex-wrap gap-[14px] items-center'>
								<List
									itemLayout='horizontal'
									size='large'
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
											<div className='w-[340px] h-[321px] bg-white rounded-lg border border-gray6 py-5 space-y-5'>
												<div className='flex justify-between items-start px-6'>
													<div className='w-[102px] h-8 bg-greenLight text-white text-[15px] font-normal flex justify-center items-center rounded-2xl'>
														{matchDay.name}
													</div>
													<ButtonCustom
														type='text'
														className='p-0 text-gray5 '>
														<IoEllipsisHorizontalSharp />
													</ButtonCustom>
												</div>
												<div className='space-y-4 px-6'>
													<div className='text-[17px] font-medium'>
														{dayjs(matchDay.startAt)
															.format('dddd DD MMMM')
															.replace(/^\w/g, (char) =>
																char.toUpperCase()
															)}
													</div>
													<div className='text-gray6 text-[15px] space-y-1'>
														<p>
															{dayjs(matchDay.startAt)
																.utcOffset(0, false)
																.format('HH:mm')}
															- Padelmar
														</p>
														<p>
															<span className='font-medium italic'>
																Modalidad:{' '}
															</span>
															Pareja rotativa por sorteo.
														</p>
														<p className='text-[11px] underline'>
															Evita sanciones{' '}
															<span className='font-bold'>
																lee el reglamento.
															</span>
														</p>
													</div>
													<div className='flex justify-start items-center space-x-4'>
														<div className='bg-gray w-[102px] h-[40px] border border-gray6 rounded-lg text-gray7 flex justify-center items-center space-x-2'>
															<IoIosList className='w-5 h-5' />
															<span>24/6</span>
														</div>

														<div className='bg-gray w-[125px] h-[32px] border border-gray6 rounded-2xl text-gray7 flex justify-center items-center space-x-2'>
															<LuClock3 className='w-5 h-5' />
															<span className='text-[15px]'>
																En 6 Días
															</span>
														</div>
													</div>
												</div>
												<div className='border-t border-gray6 px-6 pt-2	'>
													<Avatar.Group
														max={{
															count: 3,
															style: {
																color: '#fff',
																backgroundColor: '#146586',
															},
														}}>
														<Avatar
															style={{ backgroundColor: '#C7C6CB' }}>
															K
														</Avatar>
														<Avatar
															style={{ backgroundColor: '#C7C6CB' }}>
															K
														</Avatar>
														<Avatar
															style={{ backgroundColor: '#C7C6CB' }}>
															K
														</Avatar>
														<Avatar
															style={{ backgroundColor: '#C7C6CB' }}>
															K
														</Avatar>
													</Avatar.Group>
												</div>
											</div>
										</List.Item>
									)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

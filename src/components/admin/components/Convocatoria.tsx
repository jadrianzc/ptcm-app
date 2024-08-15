import { ButtonCustom } from '@/components/ui/components';
import { ConvocatoriaIcon } from '@/icons';
import { Divider } from 'antd';
import { IoAdd, IoEllipsisHorizontalSharp } from 'react-icons/io5';

export const Convocatoria = () => {
	return (
		<div className="space-y-14">
			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
						<ConvocatoriaIcon className="w-5 h-5 md:w-6 md:h-6" />
					</div>
					<h2 className="text-xl text-blue font-medium md:text-3xl">
						Fechas y Temporadas
					</h2>
				</div>

				<div>
					<div className="w-[284px] h-[1122px] px-5 py-10 bg-white space-y-6 flex flex-col">
						<div className="flex justify-between items-center h-[32px]">
							<p className="text-blue text-xl font-medium">Temporadas</p>
							<ButtonCustom type="text">
								<IoAdd />
							</ButtonCustom>
						</div>

						<div className="space-y-5 flex-grow">
							<div className="w-full bg-gray flex justify-between items-center p-2 border rounded-lg">
								<div className="text-white text-2xl font-black italic bg-blue w-11 h-11 rounded-full flex justify-center items-center">
									<span className="mr-1">8</span>
								</div>

								<div className="flex flex-col justify-center items-start">
									<span className="text-gray2 text-sm font-medium">
										Cñor Marisco
									</span>
									<span className="text-gray3 text-xs font-normal">
										42 Fechas
									</span>
								</div>

								<Divider
									type="vertical"
									className="border-gray2 !h-[37px] md:!h-[27px]"
								/>

								<ButtonCustom type="text" className="p-0 text-gray5 ">
									<IoEllipsisHorizontalSharp />
								</ButtonCustom>
							</div>

							<div className="w-full bg-gray flex justify-between items-center p-2 border rounded-lg">
								<div className="text-white text-2xl font-black italic bg-blue w-11 h-11 rounded-full flex justify-center items-center">
									<span className="mr-1">8</span>
								</div>

								<div className="flex flex-col justify-center items-start">
									<span className="text-gray2 text-sm font-medium">
										Cñor Marisco
									</span>
									<span className="text-gray3 text-xs font-normal">
										42 Fechas
									</span>
								</div>

								<Divider
									type="vertical"
									className="border-gray2 !h-[37px] md:!h-[27px]"
								/>

								<ButtonCustom type="text" className="p-0 text-gray5 ">
									<IoEllipsisHorizontalSharp />
								</ButtonCustom>
							</div>

							<div className="w-full bg-gray flex justify-between items-center p-2 border rounded-lg">
								<div className="text-white text-2xl font-black italic bg-blue w-11 h-11 rounded-full flex justify-center items-center">
									<span className="mr-1">8</span>
								</div>

								<div className="flex flex-col justify-center items-start">
									<span className="text-gray2 text-sm font-medium">
										Cñor Marisco
									</span>
									<span className="text-gray3 text-xs font-normal">
										42 Fechas
									</span>
								</div>

								<Divider
									type="vertical"
									className="border-gray2 !h-[37px] md:!h-[27px]"
								/>

								<ButtonCustom type="text" className="p-0 text-gray5 ">
									<IoEllipsisHorizontalSharp />
								</ButtonCustom>
							</div>
						</div>

						<div className="h-[32px]">
							<ButtonCustom
								color="#146586"
								className="w-full text-sm text-blue font-medium border-blue not-italic"
								icon={<IoAdd />}
							>
								Crear Temporada
							</ButtonCustom>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

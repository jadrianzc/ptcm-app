import { CollapseProps, Divider, Table } from 'antd';
import { ICategories } from '../../interfaces';
import { AddUserIcon, MemberIcon } from '@/icons';
import { columnsTable } from '../helpers';
import { ITableAthete } from '../interfaces/interface_members';

export const MembersItems = (item: ICategories) => {
	const data = (athetes: ITableAthete[]): ITableAthete[] =>
		athetes.map((athete, index) => ({
			...athete,
			id: `${index + 1}`,
			key: athete.id,
		}));

	const items = (item: ICategories): CollapseProps['items'] => [
		{
			key: item.id,
			label: (
				<div className="w-full h-full bg-white rounded-md flex justify-center items-center gap-3 p-3">
					<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center text-white font-black italic md:pr-1 md:text-[45px] md:w-20 md:h-20">
						{item.rendering}
					</div>

					<div className="flex flex-grow justify-end items-center space-x-2 md:space-x-7 lg:bg-white lg:h-[104px]">
						<div className="w-[168px] md:w-full flex flex-col justify-center items-start gap-3 lg:pl-5">
							<span className="text-[15px] md:text-xl text-gray2 font-medium">
								{item.name}
							</span>

							<div className="flex flex-wrap justify-start items-center gap-2 md:gap-3">
								<div className="flex justify-start items-center space-x-[6px] md:space-x-2">
									<div className="rounded-full w-5 h-5 bg-content flex justify-center items-center md:w-6 md:h-6">
										<MemberIcon
											className="w-3 h-3 md:w-4 md:h-4"
											color="#A5AAAC"
										/>
									</div>
									<span className="text-[13px] md:text-base text-gray3">
										13 miembros
									</span>
								</div>
							</div>
						</div>

						<Divider type="vertical" className="border-gray2 !h-[79px] md:!h-[51px]" />

						<div className="flex justify-start items-center space-x-1 md:space-x-5">
							<div className="rounded-full w-8 h-8 md:w-10 md:h-10 flex justify-center items-center">
								<AddUserIcon
									className="w-5 h-5 md:w-7 md:h-7"
									color="#A5AAAC"
									onClick={() => console.log('Click')}
								/>
							</div>
						</div>
					</div>
				</div>
			),
			children: (
				<div className="w-full bg-white rounded-lg shadow-sm">
					<Table
						columns={columnsTable}
						dataSource={data(item.athetes!)}
						pagination={false}
						scroll={{ y: 315 }}
					/>
				</div>
			),
		},
	];

	return items(item);
};

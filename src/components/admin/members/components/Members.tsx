import { useEffect } from 'react';
import { Collapse } from 'antd';
import { BsThreeDots } from 'react-icons/bs';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { MemberIcon } from '@/icons';
import { getAthetes, getCategories } from '../helpers';
import { useStoreSeason } from '@/store';
import { TableAtheltes } from './TableAtheltes';
import { MembersItems } from './';

export const Members = () => {
	const { categories, athetes, setCategories, setAthetes } = useStoreSeason();

	useEffect(() => {
		getCategories()
			.then((resp) => setCategories(resp.data))
			.catch((err) => console.log(err));

		getAthetes()
			.then((resp) => setAthetes(resp.data))
			.catch((err) => console.log(err));
	}, [setCategories, setAthetes]);

	// const onChange = (key: string | string[]) => {
	// 	console.log(key);
	// };

	return (
		<div className="space-y-14">
			<div className="space-y-7">
				<div className="flex justify-start items-center space-x-5">
					<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
						<MemberIcon className="w-5 h-5 md:w-6 md:h-6" />
					</div>
					<h2 className="text-xl text-blue font-medium md:text-3xl">Miembros</h2>
				</div>
			</div>

			{athetes.length > 0 && <TableAtheltes />}

			<div className="member-content grid grid-cols-2 gap-5">
				{categories.map((category) => (
					<Collapse
						key={category.id}
						items={MembersItems(category)}
						defaultActiveKey={['1', '2']}
						// onChange={onChange}
						expandIconPosition="end"
						collapsible="icon"
						bordered={false}
						expandIcon={(_panelProps) => <BsThreeDots className="w-6 h-6" />}
						className="w-full"
					/>
				))}
			</div>
		</div>
	);
};

import { useStoreSummoned } from '@/store';
import { useDateMatchday } from '@/hooks';
import { GruposIcon } from '@/icons';
import { GroupList } from './';
import { CountDown } from '@/components/announcement';

export const Groups = () => {
	const { now } = useDateMatchday();
	const { convocationDates } = useStoreSummoned();

	return (
		<div className='space-y-5'>
			<div className='flex justify-start items-center space-x-5'>
				<div className='rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12'>
					<GruposIcon className='w-5 h-5 md:w-6 md:h-6' />
				</div>
				<h2 className='text-xl text-blue font-medium md:text-3xl'>Grupos</h2>
			</div>

			<div className='space-y-8 md:space-y-14'>
				{now.isAfter(convocationDates?.groupDate) ? <GroupList /> : <CountDown isGroup />}
			</div>
		</div>
	);
};

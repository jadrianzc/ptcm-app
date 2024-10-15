import { Popover } from 'antd';
import { FormResults } from './FormResults';
import { Result } from './Result';
import { ViewPartidos } from '@/components/announcement/interfaces';

interface IProps {
	match: ViewPartidos;
}
export const Match = ({ match }: IProps) => {
	return (
		<div className='space-y-2'>
			<span className='text-base font-medium'>{match.name}</span>
			<Popover
				placement='bottom'
				className='cursor-pointer'
				trigger='click'
				content={<FormResults match={match} />}>
				<div className='w-full flex justify-between items-center'>
					<Result
						namePlayer1={match.namePlayerA1}
						namePlayer2={match.namePlayerA2}
						result={match.resultA}
						isFirst={false}
					/>

					<div className='font-bold italic text-base'>VS</div>

					<Result
						namePlayer1={match.namePlayerB1}
						namePlayer2={match.namePlayerB2}
						result={match.resultB}
						isFirst={true}
					/>
				</div>
			</Popover>
		</div>
	);
};

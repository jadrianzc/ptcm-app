import { useStoreAuth } from '@/store/auth';
import { Avatar } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';

export const UserProfile = () => {
	const { user } = useStoreAuth();

	console.log(user);

	return (
		<div className='p-5 h-full flex flex-col justify-center items-center space-y-5'>
			<div>
				<Avatar size={64} icon={<AiOutlineUser />} />
			</div>

			<div className='flex flex-col justify-center items-center font-semibold space-y-2'>
				<p>{user?.fullName}</p>

				<span className='italic'>{user?.name_cargo}</span>
			</div>
		</div>
	);
};

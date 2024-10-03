import { ConvocatoriaIcon } from '@/icons';
import { Convocation } from './';

export const Announcement = () => {
	return (
		<div className="space-y-5">
			<div className="flex justify-start items-center space-x-5">
				<div className="rounded-full w-9 h-9 bg-blue flex justify-center items-center md:w-12 md:h-12">
					<ConvocatoriaIcon className="w-5 h-5 md:w-6 md:h-6" />
				</div>
				<h2 className="text-xl text-blue font-medium md:text-3xl">Convocatoria</h2>
			</div>

			<Convocation />
		</div>
	);
};

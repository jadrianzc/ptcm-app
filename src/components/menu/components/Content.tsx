import Link from 'next/link';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import { Actions } from '.';
import { menuItems } from '../helpers';
import { IWrapperComponent } from '@/components/layouts/interfaces';

export const Content: React.FC<IWrapperComponent> = ({ children }) => {
	const router = useRouter();

	const title = menuItems.find((menu) => menu.key === router.pathname);

	return (
		<div className="flex-grow overflow-y-auto bg-content px-5 py-9 md:px-[58px] md:py-[45px] md:space-y-5">
			<Breadcrumb
				className="hidden justify-start text-sm md:flex"
				items={[
					{
						title: (
							<Link href={`/`} className="!h-full !flex items-center gap-2 !p-2">
								<span className="text-main">Padel Training Club Manta</span>
							</Link>
						),
					},
					{
						title: <span className="text-gray">{title?.label}</span>,
					},
				]}
			/>

			<Actions />

			{children}
		</div>
	);
};

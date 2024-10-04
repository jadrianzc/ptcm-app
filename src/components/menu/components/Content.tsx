import Link from 'next/link';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import { Actions } from '.';
import { menuItems, menuItemsAdmin } from '../helpers';
import { IWrapperComponent } from '@/components/layouts/interfaces';
import { useStoreAuth } from '@/store';

export const Content: React.FC<IWrapperComponent> = ({ children }) => {
	const router = useRouter();
	const { user } = useStoreAuth();

	// obtiene los datos del menú que coincida con la ruta, valida si hay un query
	const title = (user?.idRol === 3 ? menuItems : menuItemsAdmin).find((menu) =>
		router.query ? router.pathname.includes(menu.key) : menu.key === router.pathname,
	);

	// obtener el label desde las querys
	const matchDayPathLabel = router.query.id?.toString().split('+')[0] ?? '';

	// opciones para breadcrumb condicionales
	const options = router.query
		? [
				{
					title: (
						<Link
							href={title!.key ?? '/'}
							className="!h-full !flex items-center gap-2 !p-2"
						>
							<span className="text-gray">{title?.label}</span>
						</Link>
					),
				},
				{
					title: <span className="text-gray">{matchDayPathLabel}</span>,
				},
		  ]
		: [
				{
					title: <span className="text-gray">{title?.label}</span>,
				},
		  ];

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
					...options,
				]}
			/>

			{!router.pathname.includes('/admin') && <Actions />}

			{children}
		</div>
	);
};

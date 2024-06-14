import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { IWrapperComponent } from '../interfaces';

export const BreadcrumbLayout: React.FC<IWrapperComponent> = ({ children }) => {
	const { pathname } = useRouter();
	const items = pathname.split('/');

	return (
		<>
			<Breadcrumb
				className='flex justify-center text-sm md:text-xl'
				items={[
					{
						title: (
							<Link
								href={`/${items[items.length - 2]}`}
								className='!h-full !flex items-center gap-2 !p-2'>
								<LiaFileInvoiceDollarSolid />
								<span>Órdenes de compra</span>
							</Link>
						),
					},
					{
						title: 'Creación orden compra',
					},
				]}
			/>

			{children}
		</>
	);
};

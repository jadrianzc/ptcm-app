import { Icon } from '@/icons';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	return (
		<div className="h-[95px] px-7 bg-white rounded-xl shadow-sm flex justify-between items-center">
			<div className="flex justify-start items-center space-x-9">
				<Icon />
				<p className="text-blue text-sm">
					Condiciones para el uso | Política de Privacidad
				</p>
			</div>

			<div className="flex justify-start items-center space-x-9">
				<p className="text-gray3 text-sm">
					© Copyright 2024 PTCM |Todos los derechos reservados. Desarrollado por{' '}
					<Link href="https://wa.link/fopl2h" className="border-b">
						AstroGraph
					</Link>
				</p>
				<Icon />
			</div>
		</div>
	);
};

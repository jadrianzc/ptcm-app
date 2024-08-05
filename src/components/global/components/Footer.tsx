import Link from 'next/link';
import { Icon, LogoAstroGraph } from '@/icons';

export const Footer = () => {
	return (
		<>
			<div className="h-[95px] px-7 bg-white rounded-xl shadow-sm flex justify-between items-center !mt-20">
				<div className="flex justify-start items-center space-x-9">
					<Icon />
					<p className="text-blue text-sm">
						Condiciones para el uso | Política de Privacidad
					</p>
				</div>

				<div className="hidden justify-start items-center space-x-9 md:flex">
					<p className="text-gray3 text-sm">
						© Copyright 2024 PTCM |Todos los derechos reservados. Desarrollado por{' '}
						<Link href="https://wa.link/fopl2h" target="_blank" className="border-b">
							AstroGraph
						</Link>
					</p>
					<Link href="https://wa.link/fopl2h" target="_blank">
						<LogoAstroGraph />
					</Link>
				</div>
			</div>

			<div className="flex justify-start items-center space-x-9 md:hidden">
				<p className="text-gray3 text-sm">
					© Copyright 2024 PTCM |Todos los derechos reservados. Desarrollado por{' '}
					<Link href="https://wa.link/fopl2h" target="_blank" className="border-b">
						AstroGraph
					</Link>
				</p>
				<Link href="https://wa.link/fopl2h" target="_blank">
					<LogoAstroGraph />
				</Link>
			</div>
		</>
	);
};

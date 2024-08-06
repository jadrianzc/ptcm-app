import Link from 'next/link';
import { Icon, LogoAstroGraph } from '@/icons';

export const Footer = () => {
	return (
		<div className="space-y-4 lg:space-y-0">
			<div className="h-[58px] px-4 bg-white rounded-xl shadow-sm flex justify-between items-center !mt-20 lg:h-[95px] lg:px-7">
				<div className="w-full h-full flex justify-between items-center space-x-0 lg:w-1/2 lg:justify-start lg:space-x-5 xl:space-x-9">
					<Icon />
					<p className="text-blue text-[10px] md:text-xs xl:text-sm">
						Condiciones para el uso | Política de Privacidad
					</p>
				</div>

				<div className="hidden w-1/2 h-full justify-start items-center lg:space-x-5 xl:space-x-9 lg:flex">
					<p className="text-gray3 text-xs xl:text-sm">
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

			<div className="flex justify-between items-center px-2 lg:hidden">
				<p className="text-gray3 text-[9px] lg:text-sm">
					© Copyright 2024 PTCM |Todos los derechos reservados. Desarrollado por{' '}
					<Link href="https://wa.link/fopl2h" target="_blank" className="border-b">
						AstroGraph
					</Link>
				</p>
				<Link href="https://wa.link/fopl2h" target="_blank">
					<LogoAstroGraph className="w-[74px] h-[26px]" />
				</Link>
			</div>
		</div>
	);
};

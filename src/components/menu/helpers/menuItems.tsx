import {
	ConvocatoriaIcon,
	TablaIcon,
	PortadaIcon,
	PalmaresIcon,
	GruposIcon,
	AvisosIcon,
} from '@/icons';

export const menuItems = [
	{ key: '/', icon: <PortadaIcon className="w-8 h-8" />, label: 'Portada' },
	{ key: '/tabla', icon: <TablaIcon className="w-8 h-8" />, label: 'Tabla' },
	{ key: '/convocatoria', icon: <ConvocatoriaIcon className="w-8 h-8" />, label: 'Convocatoria' },
	{ key: '/palmares', icon: <PalmaresIcon className="w-8 h-8" />, label: 'Palmarés' },
	{ key: '/grupos', icon: <GruposIcon className="w-8 h-8" />, label: 'Grupos' },
	{ key: '/avisos', icon: <AvisosIcon className="w-8 h-8" />, label: 'Avisos' },
];

export const menuItemsAdmin = [
	{ key: '/admin/miembros', icon: <PortadaIcon className="w-8 h-8" />, label: 'Miembros' },
	{
		key: '/admin/fechas',
		icon: <PortadaIcon className="w-8 h-8" />,
		label: 'Fechas y Temporadas',
	},
];

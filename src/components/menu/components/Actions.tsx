import { ButtonCustom } from '@/components/ui/components';
import React from 'react';

export const Actions = () => {
	return (
		<div className="hidden sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
			<ButtonCustom
				type="primary"
				color="#146586"
				size="large"
				className="rounded-sm h-[57px]"
			>
				Tabla
			</ButtonCustom>

			<ButtonCustom
				type="primary"
				color="#D14747"
				size="large"
				className="rounded-sm h-[57px]"
			>
				Convocatoria
			</ButtonCustom>

			<ButtonCustom
				type="primary"
				color="#609D56"
				size="large"
				className="rounded-sm h-[57px]"
			>
				Palmarés
			</ButtonCustom>

			<ButtonCustom
				type="primary"
				color="#146586"
				size="large"
				className="rounded-sm h-[57px]"
			>
				Grupos
			</ButtonCustom>

			<ButtonCustom
				type="primary"
				color="#146586"
				size="large"
				className="rounded-sm h-[57px]"
			>
				Avisos
			</ButtonCustom>
		</div>
	);
};

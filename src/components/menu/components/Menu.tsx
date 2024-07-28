import React from 'react';

import { HeaderMenu, Sidebar } from './';
import { IWrapperComponent } from '@/components/layouts/interfaces';

export const Menu: React.FC<IWrapperComponent> = ({ children }) => {
	return (
		<>
			<HeaderMenu />

			<Sidebar>{children}</Sidebar>
		</>
	);
};

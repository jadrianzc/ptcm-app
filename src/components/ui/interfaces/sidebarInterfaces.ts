export interface ISidebarItems {
	icon: JSX.Element;
	description: string;
	path?: string;
	menus?: {
		icon: JSX.Element;
		description: string;
		path: string;
	}[];
}

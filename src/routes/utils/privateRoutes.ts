import { ComponentType } from 'react';

interface IPrivateRoutes {
	path: string;
	permissions?: string[];
	component?: ComponentType<{}> | null;
	children?: IPrivateRoutes[];
}

export const privateRoutes: IPrivateRoutes[] = [
	{
		path: '/',
	},
];

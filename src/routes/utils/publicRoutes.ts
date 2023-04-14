import { ComponentType, ReactNode } from 'react';

import loadable from '../../shared/utils/loadable';

interface IPrivateRoutes {
	path: string;
	permissions?: string[];
	component?: ReactNode | null;
	children?: IPrivateRoutes[];
}

export const publicRoutes: IPrivateRoutes[] = [
	{
		path: '/login',
		component: loadable(import('../../pages/login/Login')),
	},
];

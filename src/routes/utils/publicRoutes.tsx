import { createBrowserRouter, Navigate } from 'react-router-dom';

import loadable from '../../shared/components/loadable';
import { ROUTES } from '../../shared/constants';

export const publicRouter = createBrowserRouter([
	{
		path: ROUTES.LOGIN,
		element: loadable(import('../../pages/login/Login')),
	},
	{
		path: ROUTES.HOME,
		element: <Navigate to={ROUTES.LOGIN} replace />,
	},
	{
		path: '/*',
		element: <Navigate to={ROUTES.LOGIN} replace />,
	},
]);

import { createBrowserRouter, Navigate } from 'react-router-dom';

import loadable from '../../shared/components/loadable';

export const publicRouter = createBrowserRouter([
	{
		path: '/login',
		element: loadable(import('../../pages/login/Login')),
	},
	{
		path: '/*',
		element: <Navigate to="/login" />,
	},
]);

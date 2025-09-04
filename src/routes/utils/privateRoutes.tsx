import { createBrowserRouter, Navigate } from 'react-router-dom';

import loadable from '../../shared/components/loadable';
import ProtectedRoute from '../../shared/components/ProtectedRoute';
import { ROUTES } from '../../shared/constants';

export const privateRouter = createBrowserRouter([
	{
		path: ROUTES.DASHBOARD,
		element: (
			<ProtectedRoute>
				{loadable(import('../../pages/dashboard/Dashboard'))}
			</ProtectedRoute>
		),
	},
	{
		path: ROUTES.HOME,
		element: <Navigate to={ROUTES.DASHBOARD} replace />,
	},
	{
		path: ROUTES.LOGIN,
		element: <Navigate to={ROUTES.DASHBOARD} replace />,
	},
	{
		path: '/*',
		element: <Navigate to={ROUTES.DASHBOARD} replace />,
	},
]);

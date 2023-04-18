import { RouterProvider } from 'react-router-dom';

import useAuth from '../shared/hooks/useAuth';

import { privateRouter, publicRouter } from './utils';

export default function Routes() {
	const { isAuthenticated } = useAuth();
	const router = isAuthenticated ? privateRouter : publicRouter;

	return <RouterProvider router={router} />;
}

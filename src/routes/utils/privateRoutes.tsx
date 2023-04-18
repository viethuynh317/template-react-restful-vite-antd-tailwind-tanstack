import { createBrowserRouter, Navigate } from 'react-router-dom';

export const privateRouter = createBrowserRouter([
	{
		path: '/*',
		element: <Navigate to="/" />,
	},
]);

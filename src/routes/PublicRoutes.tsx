import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './utils';

export default function PublicRoutes() {
	return (
		<Routes>
			{publicRoutes?.map((route) => (
				<Route key={route.path} path={route.path} element={route.component}>
					{route?.children?.map((childrenRoute) => (
						<Route
							key={childrenRoute.path}
							path={childrenRoute.path}
							element={route.component}
						/>
					))}
				</Route>
			))}
		</Routes>
	);
}

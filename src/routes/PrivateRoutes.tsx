import { Route, Routes } from 'react-router-dom';

import { privateRoutes } from './utils';

export default function PrivateRoutes() {
	return (
		<Routes>
			{privateRoutes?.map((route) => (
				<Route key={route.path} path={route.path} Component={route.component}>
					{route?.children?.map((childrenRoute) => (
						<Route
							key={childrenRoute.path}
							path={childrenRoute.path}
							Component={route.component}
						/>
					))}
				</Route>
			))}
		</Routes>
	);
}

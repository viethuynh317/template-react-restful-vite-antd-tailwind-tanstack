import { BrowserRouter as Router } from 'react-router-dom';

import useAuth from '../shared/hooks/useAuth';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes() {
	const auth = useAuth();
	return <Router>{!auth ? <PrivateRoutes /> : <PublicRoutes />}</Router>;
}

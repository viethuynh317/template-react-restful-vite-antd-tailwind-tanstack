import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTES } from '../constants';
import useAuth from '../hooks/useAuth';

import LoadingSpinner from './LoadingSpinner';

interface ProtectedRouteProps {
	children: React.ReactNode;
	redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	children,
	redirectTo = ROUTES.LOGIN,
}) => {
	const { isAuthenticated, isLoading } = useAuth();
	const location = useLocation();

	if (isLoading) {
		return <LoadingSpinner message="Checking authentication..." />;
	}

	if (!isAuthenticated) {
		// Save the attempted url for redirecting after login
		return <Navigate to={redirectTo} state={{ from: location }} replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;

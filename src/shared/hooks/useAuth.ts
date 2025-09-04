import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ACTION_TYPES, ROUTES, STORAGE_KEYS } from '../constants';
import { LoginCredentials, UseAuthReturn, User } from '../types';
import {
	getItemFromLocalStorage,
	removeItemFromLocalStorage,
	setItemToLocalStorage,
} from '../utils';

import useStore from './useStore';

const useAuth = (): UseAuthReturn => {
	const { state, dispatch } = useStore();
	const navigate = useNavigate();

	const login = useCallback(
		async (credentials: LoginCredentials): Promise<void> => {
			try {
				// TODO: Replace with actual API call
				// For now, simulate login
				const mockUser: User = {
					id: '1',
					email: credentials.email,
					firstName: 'John',
					lastName: 'Doe',
					role: 'user',
				};

				const mockToken = 'mock-jwt-token';

				// Save to localStorage
				setItemToLocalStorage(STORAGE_KEYS.TOKEN, mockToken);
				setItemToLocalStorage(STORAGE_KEYS.USER, mockUser);

				// Update store
				dispatch({ type: ACTION_TYPES.SET_USER, payload: mockUser });
				dispatch({ type: ACTION_TYPES.SET_AUTHENTICATION, payload: true });

				// Navigate to dashboard or home
				navigate(ROUTES.DASHBOARD);
			} catch (error) {
				console.error('Login failed:', error);
				throw error;
			}
		},
		[dispatch, navigate]
	);

	const logout = useCallback(() => {
		// Clear localStorage
		removeItemFromLocalStorage(STORAGE_KEYS.TOKEN);
		removeItemFromLocalStorage(STORAGE_KEYS.USER);

		// Clear store
		dispatch({ type: ACTION_TYPES.CLEAR_USER_DATA });

		// Navigate to login
		navigate(ROUTES.LOGIN);
	}, [dispatch, navigate]);

	const clearError = useCallback(() => {
		// TODO: Add error clearing action
	}, []);

	return {
		user: state.user,
		isAuthenticated: state.isAuthenticated,
		isLoading: state.isLoading,
		error: state.error,
		login,
		logout,
		clearError,
	};
};

export default useAuth;

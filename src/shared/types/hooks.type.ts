import { Dispatch } from 'react';

import { ACTION_TYPES } from '../constants';

/**
 * User Types
 */
export interface User {
	id?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	avatar?: string;
	role?: string;
	createdAt?: string;
	updatedAt?: string;
}

/**
 * Store State Interface
 */
export interface StoreState {
	user: User;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

/**
 * Action Interfaces
 */
export interface SetAuthenticationAction {
	type: typeof ACTION_TYPES.SET_AUTHENTICATION;
	payload: boolean;
}

export interface SetUserAction {
	type: typeof ACTION_TYPES.SET_USER;
	payload: User;
}

export interface ClearUserDataAction {
	type: typeof ACTION_TYPES.CLEAR_USER_DATA;
}

export type StoreAction =
	| SetAuthenticationAction
	| SetUserAction
	| ClearUserDataAction;

/**
 * Store Context Interface
 */
export interface StoreContextType {
	state: StoreState;
	dispatch: Dispatch<StoreAction>;
}

/**
 * Auth Hook Return Type
 */
export interface UseAuthReturn {
	user: User;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
	login: (credentials: LoginCredentials) => Promise<void>;
	logout: () => void;
	clearError: () => void;
}

/**
 * Login Credentials
 */
export interface LoginCredentials {
	email: string;
	password: string;
}

/**
 * Legacy Interfaces - To be deprecated
 */
export interface IStore {
	user: {
		firstName?: string;
		lastName?: string;
	};
	isAuthenticated: boolean;
}

export interface IAction<T> {
	type: 'authentication';
	payload: T;
}

export interface IStoreContext {
	state?: IStore;
	dispatch: Dispatch<IAction<any>>;
}

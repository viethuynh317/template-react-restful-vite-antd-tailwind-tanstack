import { Dispatch } from 'react';

/**
 * Interfaces
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

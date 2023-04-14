import { Dispatch } from 'react';

/**
 * Interfaces
 */
export interface IStore {
	user: {
		firstName?: string;
		lastName?: string;
	};
}

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStoreContext {
	state?: IStore;
	dispatch?: Dispatch<IAction<any>>;
}

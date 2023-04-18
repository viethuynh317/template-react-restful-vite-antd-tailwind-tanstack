/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createContext, useContext } from 'react';

import { IAction, IStore, IStoreContext } from '../types';

export const initialState: IStore = {
	user: {},
	isAuthenticated: false,
};

export const reducer = (state: IStore, action: IAction<any>): IStore => {
	switch (action?.type) {
		case 'authentication':
			return { ...state, isAuthenticated: action?.payload };
		default:
			return state;
	}
};

export const StoreContext = createContext<IStoreContext>({
	state: initialState,
	dispatch: () => {},
});

export default function useStore() {
	return useContext(StoreContext);
}

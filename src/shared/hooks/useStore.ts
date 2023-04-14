import { createContext, useContext } from 'react';

import { IAction, IStore, IStoreContext } from '../types';

export const initialState: IStore = {
	user: {},
};

export const reducer = (state: IStore, action: IAction<any>) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const StoreContext = createContext<IStoreContext>({});

export default function useStore() {
	const { state, dispatch } = useContext(StoreContext);
	return [state, dispatch];
}

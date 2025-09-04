import { createContext, useContext } from 'react';

import { ACTION_TYPES, STORAGE_KEYS } from '../constants';
import { StoreAction, StoreContextType, StoreState, User } from '../types';
import { getItemFromLocalStorage } from '../utils';

// Initialize state from localStorage
const initializeState = (): StoreState => {
	const token = getItemFromLocalStorage<string>(STORAGE_KEYS.TOKEN);
	const user = getItemFromLocalStorage<User>(STORAGE_KEYS.USER);

	return {
		user: user || {},
		isAuthenticated: !!token,
		isLoading: false,
		error: null,
	};
};

export const initialState: StoreState = initializeState();

export const reducer = (state: StoreState, action: StoreAction): StoreState => {
	switch (action.type) {
		case ACTION_TYPES.SET_AUTHENTICATION:
			return {
				...state,
				isAuthenticated: action.payload,
				isLoading: false,
				error: null,
			};

		case ACTION_TYPES.SET_USER:
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: null,
			};

		case ACTION_TYPES.CLEAR_USER_DATA:
			return {
				...state,
				user: {},
				isAuthenticated: false,
				isLoading: false,
				error: null,
			};

		default:
			return state;
	}
};

export const StoreContext = createContext<StoreContextType>({
	state: initialState,
	dispatch: () => {},
});

export default function useStore() {
	const context = useContext(StoreContext);
	if (!context) {
		throw new Error('useStore must be used within a StoreContext.Provider');
	}
	return context;
}

import { getItemFromLocalStorage, removeItemFromLocalStorage } from '../utils';

import useStore from './useStore';

const useAuth = () => {
	const { state, dispatch } = useStore();

	const logout = () => {
		removeItemFromLocalStorage('token');
		dispatch({ type: 'authentication', payload: false });
		location.reload();
	};

	const isAuthenticated =
		!!getItemFromLocalStorage('token') ?? state?.isAuthenticated;

	return { isAuthenticated, logout };
};

export default useAuth;

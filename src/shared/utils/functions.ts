export const setItemToLocalStorage = <T>(key: string, data: T) => {
	if (typeof window !== 'undefined')
		localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = (key: string) => {
	if (typeof window !== 'undefined') return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key: string) => {
	if (typeof window !== 'undefined') localStorage.removeItem(key);
};

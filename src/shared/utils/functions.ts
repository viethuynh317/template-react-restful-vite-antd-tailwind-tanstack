/**
 * Type-safe localStorage utilities
 */

export const setItemToLocalStorage = <T>(key: string, data: T): void => {
	if (typeof window !== 'undefined') {
		try {
			localStorage.setItem(key, JSON.stringify(data));
		} catch (error) {
			console.error('Error saving to localStorage:', error);
		}
	}
};

export const getItemFromLocalStorage = <T>(key: string): T | null => {
	if (typeof window !== 'undefined') {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error('Error reading from localStorage:', error);
			return null;
		}
	}
	return null;
};

export const removeItemFromLocalStorage = (key: string): void => {
	if (typeof window !== 'undefined') {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error('Error removing from localStorage:', error);
		}
	}
};

/**
 * Format user display name
 */
export const formatUserName = (
	firstName?: string,
	lastName?: string
): string => {
	if (!firstName && !lastName) return 'Anonymous User';
	return [firstName, lastName].filter(Boolean).join(' ');
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	delay: number
): ((...args: Parameters<T>) => void) => {
	let timeoutId: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(null, args), delay);
	};
};

/**
 * Check if value is empty (null, undefined, empty string, empty array, empty object)
 */
export const isEmpty = (value: any): boolean => {
	if (value == null) return true;
	if (typeof value === 'string') return value.trim().length === 0;
	if (Array.isArray(value)) return value.length === 0;
	if (typeof value === 'object') return Object.keys(value).length === 0;
	return false;
};

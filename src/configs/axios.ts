import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

import { API_CONSTANTS, HTTP_STATUS, STORAGE_KEYS } from '../shared/constants';
import { ApiError, ApiResponse } from '../shared/types';
import {
	getItemFromLocalStorage,
	removeItemFromLocalStorage,
} from '../shared/utils';

const baseURL =
	(import.meta.env.VITE_API_ENDPOINT as string) ||
	'https://jsonplaceholder.typicode.com';

export const axiosInstance = axios.create({
	baseURL,
	timeout: API_CONSTANTS.DEFAULT_TIMEOUT,
	headers: {
		'Content-Type': 'application/json',
	},
});

/**
 * Request Interceptor
 */
axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = getItemFromLocalStorage<string>(STORAGE_KEYS.TOKEN);

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		// Add timestamp to prevent caching
		if (config.method === 'get') {
			config.params = {
				...config.params,
				_t: Date.now(),
			};
		}

		console.log(
			`🚀 ${config.method?.toUpperCase()} ${config.url}`,
			config.data || config.params
		);
		return config;
	},
	(error: AxiosError) => {
		console.error('Request error:', error);
		return Promise.reject(error);
	}
);

/**
 * Response Interceptor
 */
axiosInstance.interceptors.response.use(
	(response: AxiosResponse<ApiResponse>) => {
		console.log(
			`✅ ${response.config.method?.toUpperCase()} ${response.config.url}`,
			response.data
		);
		return response;
	},
	async (error: AxiosError<ApiError>) => {
		const { response, config } = error;

		if (response?.status === HTTP_STATUS.UNAUTHORIZED) {
			// Clear authentication and redirect to login
			removeItemFromLocalStorage(STORAGE_KEYS.TOKEN);
			removeItemFromLocalStorage(STORAGE_KEYS.USER);

			// Trigger a page reload to reset the app state
			window.location.href = '/login';
			return Promise.reject(error);
		}

		// Handle network errors
		if (!response) {
			console.error('Network error:', error.message);
			return Promise.reject({
				message: 'Network error. Please check your connection.',
				status: 0,
				code: 'NETWORK_ERROR',
			} as ApiError);
		}

		// Format error response
		const apiError: ApiError = {
			message: response.data?.message || error.message || 'An error occurred',
			status: response.status,
			code: response.data?.code || 'API_ERROR',
			details: response.data?.details,
		};

		console.error(
			`❌ ${config?.method?.toUpperCase()} ${config?.url}`,
			apiError
		);
		return Promise.reject(apiError);
	}
);

export default axiosInstance;

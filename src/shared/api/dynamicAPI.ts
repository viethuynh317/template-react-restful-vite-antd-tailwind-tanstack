import { AxiosResponse } from 'axios';

import { axiosInstance } from '../../configs/axios';
import { ApiError, ApiResponse, DynamicApiRequest, HttpMethod } from '../types';

export const dynamicAPI = async <T = any>({
	method,
	url,
	data,
	params,
}: DynamicApiRequest): Promise<T> => {
	try {
		let response: AxiosResponse<ApiResponse<T>>;

		switch (method) {
			case HttpMethod.GET:
				response = await axiosInstance.get(url, { params });
				break;

			case HttpMethod.POST:
				response = await axiosInstance.post(url, data, { params });
				break;

			case HttpMethod.PUT:
				response = await axiosInstance.put(url, data, { params });
				break;

			case HttpMethod.PATCH:
				response = await axiosInstance.patch(url, data, { params });
				break;

			case HttpMethod.DELETE:
				response = await axiosInstance.delete(url, { params });
				break;

			default:
				throw new Error(`Unsupported HTTP method: ${method}`);
		}

		// Return the data from the response
		return (response.data.data || response.data) as T;
	} catch (error) {
		// Re-throw the error so it can be handled by the calling code
		throw error as ApiError;
	}
};

/**
 * Convenience methods for common API operations
 */
export const apiGet = <T = any>(
	url: string,
	params?: Record<string, any>
): Promise<T> => dynamicAPI<T>({ method: HttpMethod.GET, url, params });

export const apiPost = <T = any>(
	url: string,
	data?: Record<string, any>,
	params?: Record<string, any>
): Promise<T> => dynamicAPI<T>({ method: HttpMethod.POST, url, data, params });

export const apiPut = <T = any>(
	url: string,
	data?: Record<string, any>,
	params?: Record<string, any>
): Promise<T> => dynamicAPI<T>({ method: HttpMethod.PUT, url, data, params });

export const apiPatch = <T = any>(
	url: string,
	data?: Record<string, any>,
	params?: Record<string, any>
): Promise<T> => dynamicAPI<T>({ method: HttpMethod.PATCH, url, data, params });

export const apiDelete = <T = any>(
	url: string,
	params?: Record<string, any>
): Promise<T> => dynamicAPI<T>({ method: HttpMethod.DELETE, url, params });

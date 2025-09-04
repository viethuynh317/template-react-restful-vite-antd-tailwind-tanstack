/**
 * API Response Types
 */
export interface ApiResponse<T = any> {
	data: T;
	message?: string;
	status: number;
	success: boolean;
}

export interface ApiError {
	message: string;
	status: number;
	code?: string;
	details?: Record<string, any>;
}

/**
 * HTTP Method Types
 */
export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

/**
 * API Request Configuration
 */
export interface ApiRequestConfig {
	method: HttpMethod;
	url: string;
	data?: Record<string, any>;
	params?: Record<string, any>;
	headers?: Record<string, string>;
}

/**
 * Dynamic API Interface
 */
export interface DynamicApiRequest {
	method: HttpMethod;
	url: string;
	data?: Record<string, any>;
	params?: Record<string, any>;
}

/**
 * Pagination Types
 */
export interface PaginationParams {
	page: number;
	limit: number;
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}

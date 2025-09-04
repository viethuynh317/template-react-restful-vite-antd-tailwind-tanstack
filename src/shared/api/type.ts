// Re-export types from main types file for backward compatibility
export {
	type ApiError,
	type ApiRequestConfig,
	type ApiResponse,
	HttpMethod as HTTPMethod,
	type DynamicApiRequest as IDynamicAPI,
	type PaginatedResponse,
	type PaginationParams,
} from '../types/api.type';

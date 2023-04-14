/**
 * Interfaces
 */
export interface IDynamicAPI {
	method: HTTPMethod;
	url: string;
	obj?: object;
}

/**
 * Enums
 */
export enum HTTPMethod {
	Get = 'get',
	Post = 'post',
	Put = 'put',
	Delete = 'delete',
}

// Action Types
export const ACTION_TYPES = {
	SET_AUTHENTICATION: 'SET_AUTHENTICATION',
	SET_USER: 'SET_USER',
	CLEAR_USER_DATA: 'CLEAR_USER_DATA',
} as const;

// Storage Keys
export const STORAGE_KEYS = {
	TOKEN: 'token',
	USER: 'user',
	LANGUAGE: 'language',
} as const;

// API Constants
export const API_CONSTANTS = {
	DEFAULT_TIMEOUT: 10000,
	RETRY_ATTEMPTS: 3,
} as const;

// Route Paths
export const ROUTES = {
	LOGIN: '/login',
	DASHBOARD: '/dashboard',
	HOME: '/',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
} as const;

export type ActionTypes = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];
export type StorageKeys = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
export type RoutesPaths = (typeof ROUTES)[keyof typeof ROUTES];

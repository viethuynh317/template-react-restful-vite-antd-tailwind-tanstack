/**
 * Environment configuration
 */

// Type for environment variables
interface Environment {
	NODE_ENV: string;
	VITE_API_ENDPOINT: string;
	VITE_APP_NAME: string;
	VITE_APP_VERSION: string;
	VITE_ENABLE_DEVTOOLS: boolean;
	VITE_LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

// Default values
const defaultConfig: Environment = {
	NODE_ENV: 'development',
	VITE_API_ENDPOINT: 'https://jsonplaceholder.typicode.com',
	VITE_APP_NAME: 'React App',
	VITE_APP_VERSION: '1.0.0',
	VITE_ENABLE_DEVTOOLS: true,
	VITE_LOG_LEVEL: 'info',
};

// Get environment variables with fallbacks
const getEnvVar = <T>(key: keyof Environment, defaultValue: T): T => {
	const value = import.meta.env[key];

	if (value === undefined || value === null) {
		return defaultValue;
	}

	// Handle boolean conversion
	if (typeof defaultValue === 'boolean') {
		return (value === 'true' || value === true) as T;
	}

	return value as T;
};

// Export environment configuration
export const env: Environment = {
	NODE_ENV: getEnvVar('NODE_ENV', defaultConfig.NODE_ENV),
	VITE_API_ENDPOINT: getEnvVar(
		'VITE_API_ENDPOINT',
		defaultConfig.VITE_API_ENDPOINT
	),
	VITE_APP_NAME: getEnvVar('VITE_APP_NAME', defaultConfig.VITE_APP_NAME),
	VITE_APP_VERSION: getEnvVar(
		'VITE_APP_VERSION',
		defaultConfig.VITE_APP_VERSION
	),
	VITE_ENABLE_DEVTOOLS: getEnvVar(
		'VITE_ENABLE_DEVTOOLS',
		defaultConfig.VITE_ENABLE_DEVTOOLS
	),
	VITE_LOG_LEVEL: getEnvVar('VITE_LOG_LEVEL', defaultConfig.VITE_LOG_LEVEL),
};

// Environment checks
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Logger configuration
export const shouldLog = (level: Environment['VITE_LOG_LEVEL']): boolean => {
	const levels = ['debug', 'info', 'warn', 'error'];
	const currentLevelIndex = levels.indexOf(env.VITE_LOG_LEVEL);
	const targetLevelIndex = levels.indexOf(level);

	return targetLevelIndex >= currentLevelIndex;
};

// Validate required environment variables
export const validateEnvironment = (): void => {
	const requiredVars = ['VITE_API_ENDPOINT'] as const;
	const missing = requiredVars.filter((key) => !env[key]);

	if (missing.length > 0) {
		throw new Error(
			`Missing required environment variables: ${missing.join(', ')}`
		);
	}
};

export default env;

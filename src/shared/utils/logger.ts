import { env, shouldLog } from '../../configs/environment';

/**
 * Logger utility with different log levels
 */
class Logger {
	private prefix: string;

	constructor(prefix = '') {
		this.prefix = prefix;
	}

	private formatMessage(
		level: string,
		message: string,
		...args: any[]
	): string {
		const timestamp = new Date().toISOString();
		const prefixStr = this.prefix ? `[${this.prefix}] ` : '';
		return `${timestamp} [${level.toUpperCase()}] ${prefixStr}${message}`;
	}

	debug(message: string, ...args: any[]): void {
		if (shouldLog('debug')) {
			console.debug(this.formatMessage('debug', message), ...args);
		}
	}

	info(message: string, ...args: any[]): void {
		if (shouldLog('info')) {
			console.info(this.formatMessage('info', message), ...args);
		}
	}

	warn(message: string, ...args: any[]): void {
		if (shouldLog('warn')) {
			console.warn(this.formatMessage('warn', message), ...args);
		}
	}

	error(message: string, ...args: any[]): void {
		if (shouldLog('error')) {
			console.error(this.formatMessage('error', message), ...args);
		}
	}

	group(label: string, collapsed = false): void {
		if (shouldLog('debug')) {
			if (collapsed) {
				console.groupCollapsed(label);
			} else {
				console.group(label);
			}
		}
	}

	groupEnd(): void {
		if (shouldLog('debug')) {
			console.groupEnd();
		}
	}

	table(data: any): void {
		if (shouldLog('debug')) {
			console.table(data);
		}
	}
}

// Create default logger instance
export const logger = new Logger();

// Create logger with custom prefix
export const createLogger = (prefix: string): Logger => new Logger(prefix);

// Specific loggers for different modules
export const apiLogger = createLogger('API');
export const authLogger = createLogger('AUTH');
export const routerLogger = createLogger('ROUTER');
export const storeLogger = createLogger('STORE');

export default logger;

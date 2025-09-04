import React from 'react';
import { Alert, Button, Space } from 'antd';

import { ApiError } from '../types';

interface ErrorMessageProps {
	error: string | ApiError | null;
	onRetry?: () => void;
	onDismiss?: () => void;
	showRetry?: boolean;
	showDismiss?: boolean;
	type?: 'error' | 'warning';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
	error,
	onRetry,
	onDismiss,
	showRetry = false,
	showDismiss = true,
	type = 'error',
}) => {
	if (!error) return null;

	// Extract error message
	const getErrorMessage = (err: string | ApiError): string => {
		if (typeof err === 'string') {
			return err;
		}
		return err.message || 'An error occurred';
	};

	// Extract error details if it's an ApiError
	const getErrorDetails = (err: string | ApiError): string | undefined => {
		if (typeof err === 'object' && 'details' in err && err.details) {
			return JSON.stringify(err.details, null, 2);
		}
		return undefined;
	};

	const message = getErrorMessage(error);
	const details = getErrorDetails(error);

	const actions = [];

	if (showRetry && onRetry) {
		actions.push(
			<Button key="retry" size="small" onClick={onRetry}>
				Retry
			</Button>
		);
	}

	if (showDismiss && onDismiss) {
		actions.push(
			<Button key="dismiss" size="small" onClick={onDismiss}>
				Dismiss
			</Button>
		);
	}

	return (
		<Alert
			message={message}
			description={
				details && (
					<details>
						<summary style={{ cursor: 'pointer' }}>Error Details</summary>
						<pre style={{ fontSize: '12px', marginTop: '8px' }}>{details}</pre>
					</details>
				)
			}
			type={type}
			showIcon
			closable={showDismiss && !!onDismiss}
			onClose={onDismiss}
			action={actions.length > 0 && <Space size="small">{actions}</Space>}
			style={{ marginBottom: '16px' }}
		/>
	);
};

export default ErrorMessage;

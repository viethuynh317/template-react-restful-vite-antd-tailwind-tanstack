import React, { Component, ReactNode } from 'react';
import { Button, Result } from 'antd';

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
	errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({ error, errorInfo });

		// Log error to console in development
		if (process.env.NODE_ENV === 'development') {
			console.error('ErrorBoundary caught an error:', error, errorInfo);
		}

		// Call custom error handler if provided
		if (this.props.onError) {
			this.props.onError(error, errorInfo);
		}
	}

	handleReset = () => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined });
	};

	render() {
		if (this.state.hasError) {
			// Custom fallback UI
			if (this.props.fallback) {
				return this.props.fallback;
			}

			// Default fallback UI
			return (
				<div style={{ padding: '20px', textAlign: 'center' }}>
					<Result
						status="error"
						title="Something went wrong"
						subTitle="An unexpected error occurred. Please try refreshing the page."
						extra={[
							<Button type="primary" key="retry" onClick={this.handleReset}>
								Try Again
							</Button>,
							<Button key="reload" onClick={() => window.location.reload()}>
								Reload Page
							</Button>,
						]}
					/>

					{process.env.NODE_ENV === 'development' && (
						<details style={{ marginTop: '20px', textAlign: 'left' }}>
							<summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
								<strong>Error Details (Development Only)</strong>
							</summary>
							<pre
								style={{
									background: '#f5f5f5',
									padding: '10px',
									borderRadius: '4px',
								}}
							>
								{this.state.error?.toString()}
								{this.state.errorInfo?.componentStack}
							</pre>
						</details>
					)}
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

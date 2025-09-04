import React from 'react';
import { Spin, SpinProps } from 'antd';

interface LoadingSpinnerProps extends SpinProps {
	message?: string;
	center?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
	message = 'Loading...',
	center = true,
	size = 'default',
	...props
}) => {
	const content = (
		<Spin size={size} tip={message} {...props}>
			{props.children}
		</Spin>
	);

	if (center && !props.children) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '200px',
					width: '100%',
				}}
			>
				{content}
			</div>
		);
	}

	return content;
};

export default LoadingSpinner;

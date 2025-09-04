import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message, Space, Typography } from 'antd';

import ErrorMessage from '../../shared/components/ErrorMessage';
import { ROUTES } from '../../shared/constants';
import useAuth from '../../shared/hooks/useAuth';
import { LoginCredentials } from '../../shared/types';

const { Title, Text } = Typography;

const Login: React.FC = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Get the redirect path from location state
	const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

	const handleSubmit = async (values: LoginCredentials) => {
		try {
			setLoading(true);
			setError(null);

			await login(values);

			message.success('Login successful!');
			navigate(from, { replace: true });
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Login failed. Please try again.'
			);
		} finally {
			setLoading(false);
		}
	};

	const handleDismissError = () => {
		setError(null);
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				padding: '20px',
			}}
		>
			<Card
				style={{
					width: '100%',
					maxWidth: 400,
					boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
				}}
			>
				<Space direction="vertical" size="large" style={{ width: '100%' }}>
					<div style={{ textAlign: 'center' }}>
						<Title level={2} style={{ color: '#1677ff', marginBottom: 8 }}>
							Welcome Back
						</Title>
						<Text type="secondary">Please sign in to your account</Text>
					</div>

					<ErrorMessage
						error={error}
						onDismiss={handleDismissError}
						showDismiss
					/>

					<Form
						form={form}
						name="login"
						onFinish={handleSubmit}
						layout="vertical"
						requiredMark={false}
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{ required: true, message: 'Please input your email!' },
								{ type: 'email', message: 'Please enter a valid email!' },
							]}
						>
							<Input
								prefix={<UserOutlined />}
								placeholder="Enter your email"
								size="large"
							/>
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: 'Please input your password!' },
								{ min: 6, message: 'Password must be at least 6 characters!' },
							]}
						>
							<Input.Password
								prefix={<LockOutlined />}
								placeholder="Enter your password"
								size="large"
							/>
						</Form.Item>

						<Form.Item style={{ marginBottom: 0 }}>
							<Button
								type="primary"
								htmlType="submit"
								loading={loading}
								size="large"
								block
							>
								Sign In
							</Button>
						</Form.Item>
					</Form>

					<div style={{ textAlign: 'center' }}>
						<Text type="secondary" style={{ fontSize: '12px' }}>
							Demo credentials: any email and password (min 6 chars)
						</Text>
					</div>
				</Space>
			</Card>
		</div>
	);
};

export default Login;

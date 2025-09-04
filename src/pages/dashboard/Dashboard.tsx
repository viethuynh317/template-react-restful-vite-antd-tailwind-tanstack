import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';

import useAuth from '../../shared/hooks/useAuth';
import { formatUserName } from '../../shared/utils';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
	const { user, logout } = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header
				style={{
					background: '#fff',
					padding: '0 24px',
					boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<Title level={3} style={{ margin: 0, color: '#1677ff' }}>
						Dashboard
					</Title>
					<Space>
						<Text>
							<UserOutlined /> {formatUserName(user.firstName, user.lastName)}
						</Text>
						<Button
							type="primary"
							danger
							icon={<LogoutOutlined />}
							onClick={handleLogout}
						>
							Logout
						</Button>
					</Space>
				</div>
			</Header>

			<Content style={{ padding: '24px' }}>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12} md={8} lg={6}>
						<Card title="Welcome" bordered={false}>
							<Text>
								Hello, {formatUserName(user.firstName, user.lastName)}!
							</Text>
							<br />
							<Text type="secondary">Welcome to your dashboard.</Text>
						</Card>
					</Col>

					<Col xs={24} sm={12} md={8} lg={6}>
						<Card title="Quick Stats" bordered={false}>
							<Space direction="vertical">
								<Text>
									Total Users: <strong>1,234</strong>
								</Text>
								<Text>
									Active Sessions: <strong>56</strong>
								</Text>
								<Text>
									Revenue: <strong>$12,345</strong>
								</Text>
							</Space>
						</Card>
					</Col>

					<Col xs={24} sm={12} md={8} lg={6}>
						<Card title="Recent Activity" bordered={false}>
							<Space direction="vertical">
								<Text>• User logged in</Text>
								<Text>• Data updated</Text>
								<Text>• Report generated</Text>
							</Space>
						</Card>
					</Col>

					<Col xs={24} sm={12} md={8} lg={6}>
						<Card title="Actions" bordered={false}>
							<Space direction="vertical">
								<Button type="primary" block>
									Create New
								</Button>
								<Button block>View Reports</Button>
								<Button block>Settings</Button>
							</Space>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default Dashboard;

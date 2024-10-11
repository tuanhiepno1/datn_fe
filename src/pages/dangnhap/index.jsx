import React, { useState } from 'react';
import { Tabs, Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { login, register } from '@services/api'; // Đường dẫn tới file API

const { TabPane } = Tabs;

const LoginRegister = () => {
    const [loading, setLoading] = useState(false);

    const onFinishLogin = async (values) => {
        setLoading(true);
        try {
            const response = await login(values);
            localStorage.setItem('token', response.data.token); // Lưu token vào localStorage
            message.success('Đăng nhập thành công!');
            // Chuyển hướng tới trang chính hoặc trang bạn muốn sau khi đăng nhập
        } catch (error) {
            message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        } finally {
            setLoading(false);
        }
    };

    const onFinishRegister = async (values) => {
        try {
            await register(values);
            message.success('Đăng ký thành công! Vui lòng đăng nhập.');
            // Bạn có thể chuyển hướng đến tab đăng nhập hoặc trang bạn muốn
        } catch (error) {
            message.error('Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.');
        }
    };

    // Các style inline
    const containerStyle = {
        display: 'flex',
        minHeight: '100vh',
        backgroundImage: 'url("/images/banner va logo/bgdangnhap.jpg")',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const contentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: '1200px',
    };

    const leftColumnStyle = {
        flexBasis: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: 'white',
        marginRight: '20px',
    };

    const rightColumnStyle = {
        flexBasis: '50%',
        backgroundColor: 'rgba(39, 42, 44, 0.7)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    };

    const logoStyle = {
        marginBottom: '20px',
    };

    const sloganStyle = {
        fontSize: '21px',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const tabStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
    };

    const formItemStyle = {
        fontSize: '16px',
        color: 'white',
    };

    const inputStyle = {
        fontSize: '16px',
        padding: '10px',
    };

    const buttonStyle = {
        fontSize: '16px',
        padding: '10px',
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFD700', // Màu nền nút
        color: '#000', // Màu chữ nút
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <div style={leftColumnStyle}>
                    <div style={logoStyle}>
                        <Link to="/">
                            <img src='/images/banner va logo/logo.png' alt="logo" style={{ width: '450px' }} />
                        </Link>
                    </div>
                    <div style={sloganStyle}>
                        <p>Chào mừng đến với WatchStore</p>
                        <p>Thương hiệu đồng hồ xém uy tín nhất Việt Nam!</p>
                    </div>
                </div>

                <div style={rightColumnStyle}>
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab={<span style={tabStyle}>Đăng nhập</span>} key="1">
                            <Form
                                name="login"
                                initialValues={{ remember: true }}
                                onFinish={onFinishLogin}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                                    style={formItemStyle}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Email đăng nhập" style={inputStyle} />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                    style={formItemStyle}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" style={inputStyle} />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox style={formItemStyle}>Ghi nhớ tôi</Checkbox>
                                    </Form.Item>
                                    <a className="login-form-forgot" href="/forgot-password" style={{ float: 'right', color: '#1890ff', fontSize: '14px' }}>
                                        Quên mật khẩu?
                                    </a>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={buttonStyle} loading={loading}>
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>

                        <TabPane tab={<span style={tabStyle}>Đăng ký</span>} key="2">
                            <Form
                                name="register"
                                initialValues={{ remember: true }}
                                onFinish={onFinishRegister}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                                    style={formItemStyle}
                                >
                                    <Input prefix={<MailOutlined />} placeholder="Email" style={inputStyle} />
                                </Form.Item>

                                <Form.Item
                                    name="fullName"
                                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                                    style={formItemStyle}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Họ và tên" style={inputStyle} />
                                </Form.Item>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <Form.Item
                                        name="phoneNumber"
                                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                        style={{ flexBasis: '48%', ...formItemStyle }} // Cột 1
                                    >
                                        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" style={inputStyle} />
                                    </Form.Item>
                                    <Form.Item
                                        name="address"
                                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                                        style={{ flexBasis: '48%', ...formItemStyle }} // Cột 2
                                    >
                                        <Input prefix={<HomeOutlined />} placeholder="Địa chỉ" style={inputStyle} />
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                    style={formItemStyle}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" style={inputStyle} />
                                </Form.Item>

                                <Form.Item
                                    name="confirmPassword"
                                    rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}
                                    style={formItemStyle}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Nhập lại mật khẩu" style={inputStyle} />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={buttonStyle}>
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;

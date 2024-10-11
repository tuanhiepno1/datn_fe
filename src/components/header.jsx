import { Layout, Menu, Input } from "antd";
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import endPoints from '@routes/router';

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
    const menuItems = [
        { key: '1', label: 'Giới thiệu' },
        { key: '2', label: 'Xu hướng 2024', style: { color: '#ce161f' } },
        { key: '3', label: 'Sản phẩm' },
        {
            key: '4',
            label: 'Nam',
            icon: <DownOutlined />,
            children: [
                { key: '41', label: 'Đồng hồ thể thao' },
                { key: '42', label: 'Đồng hồ sang trọng' }
            ]
        },
        {
            key: '5',
            label: 'Nữ',
            icon: <DownOutlined />,
            children: [
                { key: '51', label: 'Đồng hồ thời trang' },
                { key: '52', label: 'Đồng hồ sang trọng' }
            ]
        },
        { key: '6', label: 'Cặp đôi' },
        { key: '7', label: <Link to={endPoints.LOGIN_REGISTER}>Đăng nhập</Link> },
    ];

    return (
        <Header style={{ backgroundColor: 'white', height: '100px', display: 'flex', alignItems: 'center', padding: '0 50px' }}>
            <div className="logo" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Link to="/">
                    <img
                        src='/images/banner va logo/logo.png'
                        alt="Logo"
                        style={{ width: 100, height: 80, backgroundColor: 'black', padding: '5px', margin: '0' }}
                    />
                </Link>
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                style={{ flex: 3, justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}
                items={menuItems} // Sử dụng items thay cho children
            />
            <Search placeholder="Tìm là thấy" style={{ width: 250 }} />
            <ShoppingCartOutlined style={{ fontSize: '40px', marginLeft: '20px', cursor: 'pointer' }} />
        </Header>
    );
};

export default HeaderComponent;

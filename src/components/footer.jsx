import { Layout } from 'antd';
import { FacebookOutlined, InstagramOutlined, MailOutlined, TikTokOutlined, ShopOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ backgroundColor: 'black', color: 'white', padding: '40px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: 'gold', fontSize: '24px' }}>Về Watchstore.vn</h3>
                    <ul style={{ padding: 0 }}>
                        <li style={{ fontSize: '16px' }}>Giới thiệu về WatchStore</li>
                        <li style={{ fontSize: '16px' }}>Phản ánh - Khiếu nại</li>
                        <li style={{ fontSize: '16px' }}>Chứng nhận đại lý</li>
                        <li style={{ fontSize: '16px' }}>Tin tức công ty</li>
                        <li style={{ fontSize: '16px' }}>Top list đồng hồ</li>
                        <li style={{ fontSize: '16px' }}>Kiến thức đồng hồ</li>
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: 'gold', fontSize: '24px' }}>Chính sách chung</h3>
                    <ul style={{ padding: 0 }}>
                        <li style={{ fontSize: '16px' }}>Điều khoản thanh toán</li>
                        <li style={{ fontSize: '16px' }}>Chính sách bảo hành</li>
                        <li style={{ fontSize: '16px' }}>Chính sách bảo mật</li>
                        <li style={{ fontSize: '16px' }}>Chính sách vận chuyển</li>
                        <li style={{ fontSize: '16px' }}>Chính sách đổi trả</li>
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: 'gold', fontSize: '24px' }}>Địa chỉ cửa hàng</h3>
                    <ul style={{ padding: 0 }}>
                        <li style={{ fontSize: '16px' }}> <ShopOutlined style={{ fontSize: '20px', color: '#fadb14' }}/> 97 Trần Đại Nghĩa, HBT, Hà Nội </li>
                        <li style={{ fontSize: '16px' }}> <ShopOutlined style={{ fontSize: '20px', color: '#fadb14' }}/> 90 Lê Văn Sỹ, P11, Phú Nhuận, HCM</li>
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 20px' }}> 
                    <h3 style={{ color: 'gold', fontSize: '24px' }}>Liên hệ hỗ trợ</h3>
                    <ul style={{ padding: 0 }}>
                        <li style={{ fontSize: '16px' }}>Hotline: 093 139 2222</li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                        <a href="https://facebook.com" style={{ color: 'white', marginRight: '10px', fontSize: '30px' }} target='_blank'>
                            <FacebookOutlined />
                        </a>
                        <a href="https://gmail.com" style={{ color: 'white', marginRight: '10px', fontSize: '30px' }} target='_blank'>
                            <MailOutlined />
                        </a>
                        <a href="https://instagram.com" style={{ color: 'white', marginRight: '10px', fontSize: '30px' }} target='_blank'>
                            <InstagramOutlined />
                        </a>
                        <a href="https://tiktok.com" style={{ color: 'white', marginRight: '10px', fontSize: '30px' }} target='_blank'>
                            <TikTokOutlined />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px' }}>
                Võ Tuấn Hiệp - PS35857
            </div>
        </Footer>
    );
};

export default FooterComponent;

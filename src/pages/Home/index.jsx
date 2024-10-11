import { Layout, Carousel, Row, Col, Card, Rate } from 'antd';
import { AppstoreOutlined, CarOutlined, ReloadOutlined, SafetyOutlined, CreditCardOutlined } from '@ant-design/icons';
import HeaderComponent from '@components/header';
import FooterComponent from '@components/footer';

const { Content } = Layout;


const HomePage = () => {

    const categories = [
        { id: "cate1", title: "Đồng hồ cổ điển" },
        { id: "cate2", title: "Đồng hồ thể thao" },
        { id: "cate3", title: "Đồng hồ thông minh" },
        { id: "cate4", title: "Đồng hồ sang trọng" },
        { id: "cate5", title: "Đồng hồ lặn" },
        { id: "cate6", title: "Đồng hồ du lịch" },
        { id: "cate7", title: "Đồng hồ vintage" },
        { id: "cate8", title: "Đồng hồ quân đội" },
        { id: "cate9", title: "Đồng hồ tự động" },
        { id: "cate10", title: "Đồng hồ năng lượng mặt trời" }
    ];


    return (
        <Layout>

            {/* Header */}
            <HeaderComponent />

            {/* Banner */}
            <Content style={{ padding: '0' }}>
                <Carousel autoplay>
                    <div>
                        <img src='/images/banner va logo/banner.png' alt="banner" style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div>
                        <img src='/images/banner va logo/banner1.png' alt="banner1" style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div>
                        <img src='/images/banner va logo/banner2.png' alt="banner2" style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div>
                        <img src='/images/banner va logo/banner3.png' alt="banner3" style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div>
                        <img src='/images/banner va logo/banner4.png' alt="banner4" style={{ width: '100%', height: '400px' }} />
                    </div>
                </Carousel>

                <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '0 200px' }}>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{ textAlign: 'center', backgroundColor: '#fffbea', borderRadius: '8px', height: '200px' }} // Thay đổi chiều cao
                            >
                                <AppstoreOutlined style={{ fontSize: '30px', color: '#fadb14' }} />
                                <h3 style={{ fontWeight: 'bold' }}>Mẫu mã đa dạng</h3>
                                <p>Hoàn tiền nếu phát hiện bán hàng giả</p>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{ textAlign: 'center', backgroundColor: '#fffbea', borderRadius: '8px', height: '200px' }} // Thay đổi chiều cao
                            >
                                <CarOutlined style={{ fontSize: '30px', color: '#fadb14' }} />
                                <h3 style={{ fontWeight: 'bold' }}>Miễn phí vận chuyển</h3>
                                <p>Giao hàng nhanh, đóng gói cẩn thận</p>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{ textAlign: 'center', backgroundColor: '#fffbea', borderRadius: '8px', height: '200px' }} // Thay đổi chiều cao
                            >
                                <ReloadOutlined style={{ fontSize: '30px', color: '#fadb14' }} />
                                <h3 style={{ fontWeight: 'bold' }}>Đổi hàng 7 ngày</h3>
                                <p>1 đổi 1 trong 7 ngày với sản phẩm lỗi</p>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{ textAlign: 'center', backgroundColor: '#fffbea', borderRadius: '8px', height: '200px' }} // Thay đổi chiều cao
                            >
                                <SafetyOutlined style={{ fontSize: '30px', color: '#fadb14' }} />
                                <h3 style={{ fontWeight: 'bold' }}>Bảo hành 5 năm</h3>
                                <p>Thủ tục nhanh gọn, thay pin miễn phí</p>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card
                                hoverable
                                style={{ textAlign: 'center', backgroundColor: '#fffbea', borderRadius: '8px', height: '200px' }} // Thay đổi chiều cao
                            >
                                <CreditCardOutlined style={{ fontSize: '30px', color: '#fadb14' }} />
                                <h3 style={{ fontWeight: 'bold' }}>Đeo trước trả sau</h3>
                                <p>Trả trước 1 phần, còn lại trả sau</p>
                            </Card>
                        </Col>
                    </Row>
                </div>


                {/* Danh sách sản phẩm hot */}
                <div style={{ padding: '20px 300px' }}>
                    <div>
                        <img src='/images/banner va logo/khung.png' alt="khung" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 1" src='/images/sanpham/bently1/ben1.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Casio - Nam MTP-1374L-1AVDF Size 43.5mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4} />
                            </Card>
                        </Col>

                        {/* Sản phẩm 2 */}
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 2" src='/images/sanpham/bently1/ben2.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Olym Pianus - Nam OP990 Size 42mm </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={5} />
                            </Card>
                        </Col>

                        {/* Sản phẩm 3 */}
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 3" src='/images/sanpham/bently1/ben3.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Tissot - Nam T137.407.11.041.00 Size 40mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={3.5} />
                            </Card>
                        </Col>

                        {/* Sản phẩm 4 */}
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 4" src='/images/sanpham/bently1/ben4.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Carnival - Nam 8907G-VT-D Size 40mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4.5} />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 4" src='/images/sanpham/bently1/ben5.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Carnival - Nam 8110G-VH-DD-N Size 41mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4.5} />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 4" src='/images/sanpham/bently1/ben6.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Carnival - Nam 8907G-VT-T Size 40mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4.5} />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 4" src='/images/sanpham/bently1/ben7.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Orient - Nam (RA-AR0001S10B) Size 40.8mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4.5} />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                bordered={true}
                                cover={<img alt="Sản phẩm 4" src='/images/sanpham/bently1/bentley1.png' />}
                                hoverable
                                style={{ textAlign: 'center' }}
                            >
                                <h3>Đồng Hồ Tissot - Nam T086.408.22.036.00 Size 41mm</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>1,500,000 VND</span>
                                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>2,000,000 VND</span>
                                </div>
                                <Rate disabled defaultValue={4.5} />
                            </Card>
                        </Col>

                        {/* Thêm các sản phẩm khác */}
                    </Row>
                </div>


                <div style={{ padding: '0 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', marginBottom: 20 }}>Chọn sản phẩm phù hợp</h2>
    <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'initial', marginBottom: 20 }}>
        WatchStore cung cấp đa dạng mẫu đồng hồ theo nhiều phong cách khác nhau
    </h3>

    {/* Hàng 1 */}
    <Row gutter={16} justify="center"> {/* Sử dụng gutter để tạo khoảng cách giữa các cột */}
        {categories.slice(0, 5).map((cate, index) => (
            <Col key={index} span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}> {/* Thêm khoảng cách dưới mỗi cột */}
                <img
                    alt={cate.title}
                    src={`/images/category/${cate.id}.png`}
                    style={{
                        width: '200px', // Giảm chiều rộng hình ảnh
                        height: '80px', // Tăng chiều cao hình ảnh để có thể hiển thị tốt hơn
                        borderRadius: '10px',
                        transition: 'transform 0.3s, filter 0.3s',
                        cursor: 'pointer',
                        margin: '5px 35px', // Thêm khoảng cách trên và dưới hình ảnh
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'brightness(1)';
                    }}
                />
                <p style={{ textAlign: 'center', marginTop: '0', fontWeight: 'bold' }}>{cate.title}</p>
            </Col>
        ))}
    </Row>

    {/* Hàng 2 */}
    <Row gutter={16} justify="center" style={{ marginTop: '20px' }}> {/* Thêm khoảng cách giữa hai hàng */}
        {categories.slice(5).map((cate, index) => (
            <Col key={index} span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}> {/* Thêm khoảng cách dưới mỗi cột */}
                <img
                    alt={cate.title}
                    src={`/images/category/${cate.id}.png`}
                    style={{
                        width: '200px', // Giảm chiều rộng hình ảnh
                        height: '80px', // Tăng chiều cao hình ảnh
                        borderRadius: '10px',
                        transition: 'transform 0.3s, filter 0.3s',
                        cursor: 'pointer',
                        margin: '5px 35px', // Thêm khoảng cách trên và dưới hình ảnh
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'brightness(1)';
                    }}
                />
                <p style={{ textAlign: 'center', marginTop: '0', fontWeight: 'bold' }}>{cate.title}</p>
            </Col>
        ))}
    </Row>
</div>




                {/* Bộ sưu tập hàng Luxury */}
                <div style={{ padding: '0 300px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', marginBottom: 20 }}>Bộ sưu tập hàng Luxury</h2>
                    <Row gutter={16}>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                alt="Omega"
                                src='/images/banner va logo/slide1.png'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    transition: 'transform 0.3s, filter 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.filter = 'brightness(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'brightness(1)';
                                }}
                            />
                        </Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                alt="Omega"
                                src='/images/banner va logo/slide2.png'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    transition: 'transform 0.3s, filter 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.filter = 'brightness(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'brightness(1)';
                                }}
                            />
                        </Col>
                    </Row>
                </div>



                {/* Thương hiệu nổi bật */}
                <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', marginBottom: 20 }}>Thương hiệu nổi bật</h2>
                    <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'initial', marginBottom: 20 }}>Watchstore.vn cam kết chính hãng 100%, bồi thường 20 lần nếu phát hiện hàng giả</h3>

                    <Row gutter={16} justify="center">
                        {["category1", "category2", "category3", "category4", "category5"].map((category, index) => (
                            <Col key={index} span={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    alt={category}
                                    src={`/images/banner va logo/${category}.png`}
                                    style={{
                                        width: '250px',
                                        height: '70px',
                                        borderRadius: '10px',
                                        transition: 'transform 0.3s, filter 0.3s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'brightness(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'brightness(1)';
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16} style={{ marginTop: '16px' }} justify="center">
                        {["category7", "category8", "category9", "category10", "category11"].map((category, index) => (
                            <Col key={index} span={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    alt={category}
                                    src={`/images/banner va logo/${category}.png`}
                                    style={{
                                        width: '250px',
                                        height: '70px',
                                        borderRadius: '10px',
                                        transition: 'transform 0.3s, filter 0.3s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'brightness(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'brightness(1)';
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Cam kết */}
                <div>
                    <img src='/images/banner va logo/camket.png' alt="camket" style={{ width: '100%', height: '500px' }} />
                </div>

                {/* Phần tin tức */}
                <div style={{ padding: '20px 250px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', marginBottom: 20 }}>Tin tức</h2>
                    <Row gutter={16}>
                        {/* Tin tức chính bên trái */}
                        <Col span={16}>
                            <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '16px' }}>
                                <img
                                    alt="Tin tức chính"
                                    src="/images/banner va logo/kienthuc4.png"
                                    style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                                />
                                <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '16px' }}>Định nghĩa về người đàn ông lịch lãm và những món phụ kiện không thể thiếu</h3>
                                <p style={{ fontSize: '16px' }}>
                                    Nhiều người luôn cho rằng đàn ông lịch lãm là phải luôn chỉn chu với những bộ đồ và phụ kiện sang trọng, vẻ ngoài hào nhoáng. Nhưng điều đó có lẽ đã là quan niệm của trước kia, ngày nay đàn ông lịch lãm đã không bó hẹp những điều đó mà hơn thế một người đàn ông lịch lãm còn xuất phát từ chính con người anh ta, từ hành động, thái độ với cuộc sống của chính bản thân mình.
                                </p>
                            </div>
                        </Col>

                        {/* Tin tức phụ bên phải */}
                        <Col span={8}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '16px', display: 'flex' }}>
                                        <img
                                            alt={`Tin tức phụ `}
                                            src={`/images/banner va logo/kienthuc2.png`}
                                            style={{ width: '100px', height: 'auto', borderRadius: '10px', marginRight: '16px' }}
                                        />
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px' }}>Muốn dậy lúc 5h sáng thì ngủ lúc mấy giờ là tốt nhất?</h4>
                                            <p style={{ fontSize: '14px', margin: 0 }}>
                                                Việc dậy sớm sẽ không còn trở nên quá khó khăn nếu như chúng ta biết cách lựa chọn thời điểm đi ngủ phù hợp. Đi ngủ đúng lúc sẽ đảm bảo chúng ta có được chu kỳ giấc ngủ trọn vẹn và thức dậy một cách tỉnh táo dù là sớm hay muộn.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '16px', display: 'flex' }}>
                                        <img
                                            alt={`Tin tức phụ `}
                                            src={`/images/banner va logo/kienthuc3.png`}
                                            style={{ width: '100px', height: 'auto', borderRadius: '10px', marginRight: '16px' }}
                                        />
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px' }}>Dịch vụ mạ vàng đồng hồ</h4>
                                            <p style={{ fontSize: '14px', margin: 0 }}>
                                                Mạ vàng đồng hồ (còn gọi là xi vàng đồng hồ) là phương pháp làm mới bề mặt đồng hồ cũ mà không phải thay linh kiện. Do đồng hồ là sản phẩm dùng hàng ngày, thường xuyên bị ma xát, tiếp xúc với mồ hôi tay nên đồng hồ mau bị mòn và oxy hóa.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '16px', display: 'flex' }}>
                                        <img
                                            alt={`Tin tức phụ `}
                                            src={`/images/banner va logo/kienthuc1.png`}
                                            style={{ width: '100px', height: 'auto', borderRadius: '10px', marginRight: '16px' }}
                                        />
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px' }}>Muốn dậy từ 4h sáng mà vẫn khỏe mạnh, bạn nên đi ngủ từ lúc nào?</h4>
                                            <p style={{ fontSize: '14px', margin: 0 }}>
                                                Nhiều người luôn ấn định thời điểm thức dậy, nhưng đối với thời điểm đi ngủ thì khác, nó thay đổi liên tục, tùy thuộc vào lịch làm việc, nghĩa vụ gia đình...
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '16px', display: 'flex' }}>
                                        <img
                                            alt={`Tin tức phụ `}
                                            src={`/images/banner va logo/kienthuc.png`}
                                            style={{ width: '100px', height: 'auto', borderRadius: '10px', marginRight: '16px' }}
                                        />
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '18px', margin: '0 0 8px' }}>Xem giờ nước lên xuống trong ngày đơn giản với đồng hồ thủy triều</h4>
                                            <p style={{ fontSize: '14px', margin: 0 }}>
                                                Xem giờ nước lên xuống trong ngày vào lúc 2 giờ sáng và 6 giờ 30 phút chiều giúp bạn biết thời điểm thủy triều thấp, thủy triều cao.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </Content>

            <FooterComponent />
        </Layout>
    );
};

export default HomePage;

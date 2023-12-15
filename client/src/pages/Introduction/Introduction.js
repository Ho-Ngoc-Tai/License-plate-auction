import React from 'react'
import Styles from './Introduction.module.css'
import Search from '../../components/Search/Search'
import PartnerSlider from '../../components/ImageSlider/PartnerSlide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.form}>
            <Search />
        </div>
        <div className={Styles.paragraph}>
            <p className={Styles.p}>Trang chủ</p>
            <p><FontAwesomeIcon icon={faGreaterThan}/></p>
            <p className={Styles.p}>Giới thiệu</p>
        </div>
        <div className={Styles.Product}>
            <span>
                <div className={Styles.productAuction}>Giới thiệu</div>
                <div className={Styles.productAuction}>Tài sản nổi bật</div>
            </span>
        </div>
        <div className={Styles.line}></div>
        <div className={Styles.content}>
            <h1>I. VỀ CHÚNG TÔI</h1>
            <p>Công ty đấu giá hợp danh Rồng Việt được thành lập và hoạt động theo Giấy chứng nhận đăng ký hoạt động số: 08/TP-ĐKHĐ được 
                Sở Tư pháp thành phố Đà Nẵng cấp ngày 25/01/2019, Đăng ký thay đổi lần thứ nhất ngày 26/11/2019. (Được chuyển đổi đăng ký 
                hoạt động đấu giá tài sản từ Công ty TNHH MTV Tư vấn đầu tư bất động sản và đấu giá Đà Nẵng theo Giấy chứng nhận đăng ký doanh 
                nghiệp số: 0401803325 do Sở Kế hoạch và Đầu tư thành phố Đà Nẵng cấp ngày 06/12/2016)
            </p>
            <p>Đấu Giá Rồng Việt là một trong những doanh nghiệp hàng đầu tại Việt Nam chuyên cung cấp dịch vụ bán đấu giá tài sản chất lượng, 
                uy tín, chuyên nghiệp. Hiện nay, Đấu Giá Rồng Việt tự hào là doanh nghiệp sở hữu Website đấu giá trực tuyến chuyên nghiệp đầu tiên 
                tại Việt Nam. Với mong muốn đem đến cho thị trường những tài sản đấu giá mang tính chất độc đáo, đặc biệt không chỉ giới hạn ở những
                tài sản truyền thống, với những trải nghiệm, cách thức đấu giá hoàn toàn mới, ở bất cứ lĩnh vực nào, Đấu Giá Rồng Việt luôn chứng 
                tỏ vai trò tiên phong, dẫn dắt sự thay đổi xu hướng hiện đại.
            </p>
            <div className={Styles.image}>
                <img src="./ve-chung-toi (1)_1590420416.jpg" width="400px" height="400px"/>
                <img src="./ve-chung-toi (2)_1590420424.jpg" width="400px" height="400px"/>
            </div>
            <p>Công ty Đấu Giá Rồng Việt có đủ năng lực và điều kiện để thực hiện dịch vụ bán đấu giá tài sản trên phạm vi toàn quốc, 
                với Ban lãnh đạo dày dặn kinh nghiệm và đội ngũ nhân sự trẻ, chuyên nghiệp, hoạt động bán đấu giá tài sản của Đấu Giá 
                Rồng Việt được thực hiện một cách công khai, khách quan mang lại những giá trị gia tăng vượt bậc cho tài sản đấu giá và 
                chủ sở hữu tài sản đấu giá.
            </p>
            <p>Với việc triển khai xây dựng thành công và đưa vào hoạt động <em>Website đấu giá trực tuyến hiện đại đầu tiên tại Việt Nam</em>
                . Mở ra một hướng phát triển mới cho hoạt động đấu giá tài sản hiện nay, đảm bảo tính công khai, khách quan, minh bạch cho tài sản 
                đấu giá, tiết kiệm được thời gian, chi phí cho khách hàng. Cùng với hoạt động quảng bá, truyền thông rộng khắp của Đấu Giá Rồng
                Việt sẽ tạo nên thương hiệu danh tiếng cho khách hàng khi tham gia gửi và mua tài sản đấu giá tại Đấu Giá Rồng Việt.
            </p>
            <h1>II. CƠ SỞ VẬT CHẤT - TRANG THIẾT BỊ</h1>
            <p>Là đơn vị được đầu tư quy mô lớn về cơ sở vật chất, trang thiết bị, đáp ứng tốt nhất cho hoạt động bán đấu giá tài sản hiện nay 
                tại thành phố Đà Nẵng.
            </p>
            <p>Công ty có các phòng làm việc rộng rãi, hiện đại (Phòng lãnh đạo công ty, phòng tiếp nhận hồ sơ bán đấu giá, phòng chuyên môn, 
                nghiệp vụ đấu giá...)
            </p>
            <p>Công ty có 02 hội trường để tổ chức cuộc đấu giá, đảm bảo từ 80 - 100 chổ ngồi cho khách hàng tham gia đấu giá.</p>
            <div className={Styles.image}>
                <img src="./co-so-vat-chat-11.jpg" width="400px" height="400px"/>
                <img src="./co-so-vat-chat-22.jpg" width="400px" height="400px"/>
            </div>
            <h1>III. KINH NGHIỆM TỔ CHỨC BÁN ĐẤU GIÁ</h1>
            <p>Công ty luôn hiểu Quý đơn vị có tài sản bán đấu giá quan tâm nhiều đến tính chuyên nghiệp và kinh nghiệm của đội ngũ đấu 
                giá viên, nhân viên của công ty. Chính vì vậy, công ty chúng tôi đặt sự quan tâm hàng đầu về chất lượng đội ngũ đấu giá 
                viên, chuyên viên nghiệp vụ đấu giá. Công ty hiện tại có 04 đấu giá viên được Bộ Tư pháp cấp Chứng chỉ hành nghề đấu giá
                và 01 tập sự hành nghề đấu giá tại công ty.
            </p>
            <p>Đấu giá viên đồng thời là Giám đốc của Công ty là người đã có hơn 19 năm kinh nghiệm trong lĩnh vực bán đấu giá tài sản, 
                đã thực hiện thủ tục đấu giá, điều hành thành công hàng trăm cuộc bán đấu giá, trong đó nhiều cuộc bán đấu giá có giá trị 
                lớn hàng trăm tỷ đồng…
            </p>
            <p>Đối với đấu giá viên, chuyên viên nghiệp vụ khác của công ty đều là những người được đào tạo chuyên môn trong lĩnh vực pháp 
                luật và đã có nhiều kinh nghiệm trong lĩnh vực bán đấu giá tài sản.
            </p>
            <p><u>Về hồ sơ bán đấu giá:</u> Công ty đã tiếp nhận và tổ chức đấu giá thành công nhiều tài sản của các đơn vị như: Ngân hàng, 
                Cơ quan thi hành án, Sở Tài chính, Chi Cục quản lý thị trường, Phòng Tài chính - Kế hoạch quận, huyện, Bưu điện thành phố và các 
                doanh nghiệp Nhà nước… trên địa bàn thành phố Đà Nẵng và các tỉnh, thành phố khác. Bình quân hàng năm, Công ty tổ chức bán đấu giá 
                thành trên 50 trường hợp với giá trị bán được từ 60 tỷ đồng đến hơn 100 tỷ đồng.
            </p>
            <h1>IV. THÀNH TỰU NỔI BẬT</h1>
            <p>Những năm qua, Đấu Giá Rồng Việt đã đạt được nhiều thành tựu nhất định trong hoạt động đấu giá tài sản, đấu giá thành công rất nhiều 
                tài sản phổ biến trên thị trường từ bất động sản, ôtô đã qua sử dụng, tài sản thanh lý, tài sản xử lý nợ ngân hàng, tài sản của 
                doanh nghiệp có vốn nhà nước, cổ phiếu, cổ phần và các sản phẩm có giá trị nghệ thuật độc đáo khác…
            </p>
            <p>Hiện nay, Đấu Giá Rồng Việt đang là đối tác đáng tin cậy của các tập đoàn lớn như: Tập đoàn truyền thông Thanh Niên, Tập đoàn dầu 
                khí Việt Nam…và các đối tác khác như: Ngân hàng, Cơ quan thi hành án, Chi cục quản lý thị trường và các sở, ban ngành, các doanh 
                nghiệp nhà nước… tại thành phố Đà Nẵng và các tỉnh thành trong cả nước.
            </p>
            <div className={Styles.image}>
                <img src="./doi-tac.jpg" width="400px" height="400px"/>
                <img src="./doi-tac-2.jpg" width="400px" height="400px"/>
            </div>
            <h1>V. GIÁ TRỊ CỐT LÕI</h1>
            <div className={Styles.image}>
                <img src="./Gia-tri-cot-loi-1.jpg" width="400px" height="400px"/>
                <img src="./Gia-tri-cot-loi-2.jpg" width="400px" height="400px"/>
            </div>
            <div className={Styles.image}>
                <img src="./Gia-tri-cot-loi-3.jpg" width="400px" height="400px"/>
                <img src="./Gia-tri-cot-loi-4.jpg" width="400px" height="400px"/>
            </div>
            <h1>V.I LỢI ÍCH KHI LỰA CHỌN RỒNG VIỆT</h1>
            <h2>1. KHÁCH HÀNG GỬI TÀI SẢN BÁN ĐẤU GIÁ</h2>
            <ul>
                <li>Được tư vấn giải pháp, phương án và phương thức đấu giá tài sản đạt hiệu quả cao</li>
                <li>Tiết kiệm chi phí, thời gian bán đấu giá tài sản</li>
                <li>Đảm bảo an toàn cao nhất về thủ tục pháp lý </li>
                <li>Thời gian đưa sản phẩm ra thị trường ngắn để đáp ứng được những hạn chót nghiêm ngặt</li>
                <li>Tài sản đấu giá được tiếp cận với số lượng lớn người mua và tài sản đấu giá có thể được mua với giá trị rất cao</li>
            </ul>
            <h2>2. KHÁCH HÀNG MUA TÀI SẢN BÁN ĐẤU GIÁ</h2>
            <ul>
                <li>Cập nhật nhanh chóng, chính xác các thông tin liên quan đến hoạt động đấu giá tài sản.</li>
                <li>Các sản phẩm đấu giá luôn đảm bảo về chất lượng, an toàn về mặt pháp lý và hoàn toàn không có rủi ro khi giao dịch.</li>
                <li>Có cơ hội mua được các tài sản đấu giá có giá trị lớn về truyền thông, khuếch trương, phát triển danh tiếng, thương hiệu cho khách hàng</li>
                <li>Vận dụng tối đa công nghệ vào đấu giá, tiết kiệm được chi phí đi lại nhiều lần so với các thủ tục đấu giá tài sản thông thường.</li>
            </ul>
            <h1>V.II HỒ SƠ PHÁP LÝ</h1>
            <p><em>Giấy chứng nhận đăng ký doanh nghiệp</em></p>
            <div className={Styles.image1}>
                <img src="./GiayDangKyKinhDoanh.jpg" width="400px" height="400px" />
            </div>
            <p><em>Quyết định phê duyệt tổ chức đấu giá tài sản đủ điều kiện thực hiện hình thức đấu giá trực tuyến</em></p>
            <div className={Styles.image1}>
                <img src="./QuyetDinhPheDuyet_DauGiaTrucTuyen.jpg" width="400px" height="400px" />
            </div>
            <p><em>Chứng chỉ hành nghề đấu giá</em></p>
            <div className={Styles.image}>
                <img src="./AnhSon2.jpg" width="400px" height="300px"/>
                <img src="./AnhSon1.jpg" width="400px" height="300px"/>
            </div>
            <div className={Styles.image}>
                <img src="./AnhKhoa1.jpg" width="400px" height="300px"/>
                <img src="./Anhkhoa22.jpg" width="400px" height="300px"/>
            </div>
            <div className={Styles.image}>
                <img src="./AnhXuan2.jpg" width="400px" height="300px"/>
                <img src="./AnhXuan1.jpg" width="400px" height="300px"/>
            </div>
            <div className={Styles.image}>
                <img src="./ChiXuan1.jpg" width="400px" height="300px"/>
                <img src="./ChiXuan2.jpg" width="400px" height="300px"/>
            </div>
        </div>
        <div className={Styles.Product}>
            <span>
            <div className={Styles.productAuction}>Đối tác của chúng tôi</div>
            <div className={Styles.showAll}>xem tất cả</div>
            </span>
        </div>
        <div className={Styles.slide}>
            <PartnerSlider />
        </div>
    </div>
  )
}

export default Introduction
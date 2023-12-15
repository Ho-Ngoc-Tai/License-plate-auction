import React from 'react'
import Search from '../../components/Search/Search'
import PartnerSlider from '../../components/ImageSlider/PartnerSlide'
import Styles from './Room.module.css'

const Room = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.form}>
            <Search />
        </div>
        <div className={Styles.paragraph}>
            <p className={Styles.p}>Trang chủ</p>
        </div>
        <div className={Styles.Product}>
            <span>
                <div className={Styles.productAuction}>Giới thiệu</div>
                <div className={Styles.productAuction}>Tài sản nổi bật</div>
            </span>
        </div>
        <div className={Styles.line}></div>
        <div className={Styles.content}>
            <h1>1. Thời điểm mở phòng đấu giá</h1>
                <p>Phòng đấu giá được mở liên tục từ thời điểm thông báo đấu giá đến thời điểm kết thúc phiên đấu giá.</p>
            <h1>2. Cách vào phòng đấu giá:</h1>
                <p>- Ngay sau khi khách hàng ký đấu giá thành công sẽ được cung cấp mật khẩu để vào “phòng đấu giá” 
                    (thông báo qua Email, nhắn tin, điện thoại…). Khách hàng có nghĩa vụ bảo mật thông tin được chúng tôi cung cấp.
                </p>
                <p>Trong mọi trường hợp khách hàng làm lộ bí mật thông tin mà không thông báo ngay cho Đấu Giá Rồng Việt thì 
                    khách hàng chịu toàn bộ các trách nhiệm, nghĩa vụ phát sinh do thông tin bảo mật bị lộ.
                </p>
            <h1>3. Giao diện phòng và cách thức đấu giá:</h1>
                <p>- Trong giao diện chính của <b>“phòng đấu giá”</b>, khách hàng được xem lại thông tin tài sản, mức giá khởi điểm và mức 
                    giá đang đấu hiện tại. Khách hàng trả giá bắt đầu từ <b>mức giá đang đấu hiện tại</b> trở lên. Không giới hạn mức giá trần và 
                    số lần trả giá của khách hàng cho đến khi nào kết thúc Phiên đấu giá.
                </p>
            <h1>4. Khách hàng trúng đấu giá: </h1>
                <p>Là người có <b>mức giá cao nhất đầu tiên</b> được hệ thống thông tin đấu giá trực tuyến ghi nhận tại thời điểm kết thúc Phiên đấu giá.
                </p>
            <h1>5. Công khai kết quả đấu giá:</h1>
                <p>Kết quả đấu giá được đăng công khai trên Website Đấu Giá Rồng Việt và thông báo trực tiếp cho người trúng đấu giá.
                </p>
                <div className={Styles.Product}>
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

export default Room
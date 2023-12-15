import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faBraille, faPersonBreastfeeding} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src="/logo192.png" alt="Logo" width="50px" height="50px" />
        <h1>Công ty Đấu giá Hợp danh Việt Nam</h1>
        <div className={styles.location}>
          <i className={styles.green}><FontAwesomeIcon icon={faLocationDot} /></i>
          <p><span className={styles.green}>Trụ sở chính:</span> BT5-16(03), khu đô thị Văn Quán - Yên Phúc, P.Phúc La, Q.Hà Đông, Hà Nội</p>
        </div>

        <div className={styles.contact}>
          <div className={styles.email}>
            <i className={styles.green}><FontAwesomeIcon icon={faEnvelope} /></i>
            <p>: hongoctai250402@gmail.com</p>
          </div>
          <i className={styles.doc}><FontAwesomeIcon icon={faBraille} /></i>
          <div className={styles.hotline}>
            <i className={styles.green}><FontAwesomeIcon icon={faPhone} /></i>
            <p>: 0398528547</p>
          </div>
        </div>
        <div className={styles.pharagrapse}>
          <p>Đại diện: Hồ Ngọc Tài - Chức vụ: Giám đốc</p>
          <p>Giấy chứng nhận ĐKHĐ: 41/TP-ĐKHĐ do Sở Tư pháp Hà Nội cấp ngày 21/01/2019</p>
        </div>
      </div>

      <div className={styles.about}>
        <div>
          <h1>Về chúng tôi</h1>
            <li>Trang chủ</li>
            <li>Tin tức</li>
        </div>
        <div>
          <h1>Chính sách</h1>
            <li>Điều khoản sử dụng</li>
            <li>Hướng dẫn</li>
        </div>
      </div>

      <div className={styles.browser}>
        <h1>Trình duyệt tương thích</h1>
        <ul>
          <li><img src="/chrome.webp" alt="chrome" width="30px" height="30px" />v.90+</li>
          <li><img src="/edge.webp" alt="edge" width="30px" height="30px" />v.90+</li>
          <li><img src="/firefox.webp" alt="firefox" width="30px" height="30px" />v.90+</li>
          <li><img src="/safiri.webp" alt="safiri" width="30px" height="30px" />v.90+</li>
        </ul>
        <div className={styles.mode}>Mặc định <FontAwesomeIcon icon={faPersonBreastfeeding} /> </div>
      </div>

      
      <div className={styles.footerbottom}>
        <hr className={styles.custom}></hr>
        <div className={styles.end}>
          <p className={styles.pharagrapse1}>Trang thông tin điện tử đấu giá trực tuyến vpa.com.vn đã được Sở Tư pháp thành phố Hà Nội phê duyệt đủ điều kiện thực hiện hình thức đấu giá trực tuyến theo Quyết định số 226/QĐ-STP ngày 16/3/2023
            Bản quyền thuộc về VPA@2023</p>
          <p className={styles.pharagrapse2}>Bản quyền thuộc về VPA@2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
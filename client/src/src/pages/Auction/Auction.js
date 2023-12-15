import React from 'react'
import Styles from './Auction.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons';

const Auction = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
      <div className={Styles.imageContainer}>
        <img src="/san.jpg" alt="Logo" className={Styles.backgroundImage} />
        <div className={Styles.overlayText}>
          <div className={Styles.time}>Thời gian còn lại</div>
          <div className={Styles.number}>
            <span>03</span>
            <span>11</span>
          </div>
          <div className={Styles.colon}>:</div>
          <div className={Styles.minutes}>
            <span>Phút</span>
            <span>Giây</span>
          </div>
          <div className={Styles.image}><img src="/doco1.jfif" alt="Logo" width="300px" height="100px"/></div>
        </div>
      </div>

          <div className={Styles.AuctionB}>
          <div className={Styles.history}>
              <div className={Styles.product}>
                  <span>
                    <div>Diễn biến cuộc đấu giá</div>
                    <div className={Styles.showAll}>xem tất cả</div>
                  </span>
              </div>
              <div className={Styles.product}>
                  <span>
                    <div>
                      <p className={Styles.productAuction}>14.480.000.000 Đ</p>
                      <p className={Styles.showAll}>04/11/2023 - 08:38:07.604</p>
                    </div>
                    <div className={Styles.showAll}>VPA-Y5BFF4</div>
                  </span>
              </div>
              <div className={Styles.product}>
                  <span>
                    <div>
                      <p className={Styles.productAuction}>14.480.000.000 Đ</p>
                      <p className={Styles.showAll}>04/11/2023 - 08:38:07.604</p>
                    </div>
                    <div className={Styles.showAll}>VPA-Y5BFF4</div>
                  </span>
              </div>
              <div className={Styles.product}>
                  <span>
                    <div>
                      <p className={Styles.productAuction}>14.480.000.000 Đ</p>
                      <p className={Styles.showAll}>04/11/2023 - 08:38:07.604</p>
                    </div>
                    <div className={Styles.showAll}>VPA-Y5BFF4</div>
                  </span>
              </div>
            </div>
            <div className={Styles.history}>
              <div className={Styles.product}>
                  <span>
                    <div>Giá hiện tại</div>
                    <div className={Styles.productAuction}>32.000.000.000 Đ</div>
                  </span>
                </div>
                <div className={Styles.price}>
                  <div className={Styles.now}>5.000.000</div>
                  <FontAwesomeIcon icon={faXmark} />
                  <div className={Styles.multip}>
                    <span className={Styles.sign}><FontAwesomeIcon icon={faMinus} /></span>
                    <span>1</span>
                    <span className={Styles.sign}><FontAwesomeIcon icon={faPlus} /></span>
                  </div>
                  <FontAwesomeIcon icon={faEquals} />
                  <div className={Styles.result}>5.000.000</div>
              </div>
              <div className={Styles.charge}>
                <div>Trả giá</div>
                <div>13.080.000.000 đ</div>
              </div>
              <div className={Styles.text}>
                <div>Mười ba tỷ không trăm tám mươi triệu đồng</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Auction
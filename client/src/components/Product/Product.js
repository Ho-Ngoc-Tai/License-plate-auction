import React from 'react'
import Styles from './Product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faClock } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.productlist}>
            <div className={Styles.product}>
                <div className={Styles.productimages}>
                    <img src='./product4.jpg' alt='Not found images'/>
                </div>
                <div className={Styles.productinfo}>
                    <div className={Styles.productCategory}>
                        <div className={Styles.categoryAddress}>
                            <span>Xe con &nbsp; </span>
                            <span>Tây Ninh</span>
                        </div>
                        <div className={Styles.categoryFavourite}>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>10</span>
                        </div>
                    </div>
                    <div className={Styles.productTimeout}>
                        
                        <div className={Styles.timeoutContent}>
                            <div className={Styles.timeoutIcon}>
                            <FontAwesomeIcon icon={faClock}/>
                            </div>
                            
                            <div className={Styles.timeoutText}>
                            <span>Thời gian đấu giá còn lại</span>
                            <span>2 ngày 12 giờ 20 phút</span>
                            </div>
                            
                        </div>
                       <button>Chờ đấu giá</button>
                       <span>Xem chi tiết thông tin</span>
                    </div>
                </div>
            </div>
            <div className={Styles.product}>
                <div className={Styles.productimages}>
                    <img src='./product4.jpg' alt='Not found images'/>
                </div>
                <div className={Styles.productinfo}>
                    <div className={Styles.productCategory}>
                        <div className={Styles.categoryAddress}>
                            <span>Xe con &nbsp; </span>
                            <span>Tây Ninh</span>
                        </div>
                        <div className={Styles.categoryFavourite}>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>10</span>
                        </div>
                    </div>
                    <div className={Styles.productTimeout}>
                        
                        <div className={Styles.timeoutContent}>
                            <div className={Styles.timeoutIcon}>
                            <FontAwesomeIcon icon={faClock}/>
                            </div>
                            
                            <div className={Styles.timeoutText}>
                            <span>Thời gian đấu giá còn lại</span>
                            <span>2 ngày 12 giờ 20 phút</span>
                            </div>
                            
                        </div>
                       <button>Chờ đấu giá</button>
                       <span>Xem chi tiết thông tin</span>
                    </div>
                </div>
            </div>
            <div className={Styles.product}>
                <div className={Styles.productimages}>
                    <img src='./product4.jpg' alt='Not found images'/>
                </div>
                <div className={Styles.productinfo}>
                    <div className={Styles.productCategory}>
                        <div className={Styles.categoryAddress}>
                            <span>Xe con &nbsp; </span>
                            <span>Tây Ninh</span>
                        </div>
                        <div className={Styles.categoryFavourite}>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>10</span>
                        </div>
                    </div>
                    <div className={Styles.productTimeout}>
                        
                        <div className={Styles.timeoutContent}>
                            <div className={Styles.timeoutIcon}>
                            <FontAwesomeIcon icon={faClock}/>
                            </div>
                            
                            <div className={Styles.timeoutText}>
                            <span>Thời gian đấu giá còn lại</span>
                            <span>2 ngày 12 giờ 20 phút</span>
                            </div>
                            
                        </div>
                       <button>Chờ đấu giá</button>
                       <span>Xem chi tiết thông tin</span>
                    </div>
                </div>
            </div>
            <div className={Styles.product}>
                <div className={Styles.productimages}>
                    <img src='./product4.jpg' alt='Not found images'/>
                </div>
                <div className={Styles.productinfo}>
                    <div className={Styles.productCategory}>
                        <div className={Styles.categoryAddress}>
                            <span>Xe con &nbsp; </span>
                            <span>Tây Ninh</span>
                        </div>
                        <div className={Styles.categoryFavourite}>
                            <FontAwesomeIcon icon={faHeart}/>
                            <span>10</span>
                        </div>
                    </div>
                    <div className={Styles.productTimeout}>
                        
                        <div className={Styles.timeoutContent}>
                            <div className={Styles.timeoutIcon}>
                            <FontAwesomeIcon icon={faClock}/>
                            </div>
                            
                            <div className={Styles.timeoutText}>
                            <span>Thời gian đấu giá còn lại</span>
                            <span>2 ngày 12 giờ 20 phút</span>
                            </div>
                            
                        </div>
                       <button>Chờ đấu giá</button>
                       <span>Xem chi tiết thông tin</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
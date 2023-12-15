import React from 'react'
import Styles from './Register.module.css'
import Search from '../../components/Search/Search';
import PartnerSlider from '../../components/ImageSlider/PartnerSlide'

const Register = () => {
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
        <div className={Styles.image}>
            <img src="./Dangky1.jfif" width="370px" height="444px"/>
            <img src="./Dangky2.jfif" width="370px" height="444px"/>
        </div>
        <div className={Styles.image}>
            <img src="./Dangky3.jfif" width="370px" height="444px"/>
            <img src="./Dangky4.jfif" width="370px" height="444px"/>
        </div>
        <div className={Styles.image}>
            <img src="./Dangky5.jfif" width="370px" height="444px"/>
            <img src="./Dangky6.jfif" width="370px" height="444px"/>
        </div>
        <div className={Styles.image}>
            <img src="./Dangky7.jfif" width="370px" height="444px"/>
            <img src="./Dangky8.jfif" width="370px" height="444px"/>
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

export default Register
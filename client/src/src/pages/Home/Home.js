import React from 'react'
import Styles from "./Home.module.css"
import ImageSlide from '../../components/ImageSlider/ImageSlide' // Đường dẫn từ Home.js đến ImageSlider.js
import Product from '../../components/Product/Product'
import ProductSlider from '../../components/ImageSlider/productSlide'
import PartnerSlide from '../../components/ImageSlider/PartnerSlide';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.slide}>
        <ImageSlide />
      </div>
      <div className={Styles.form}>
        <Search />
      </div>
      <div className={Styles.Product}>
        <span>
          <div className={Styles.productAuction}>Đang đấu giá</div>
          <div className={Styles.showAll}>Xem tất cả</div>
        </span>
        <div>
          <Product />
        </div>
      </div>
      <div className={Styles.Product}>
        <span>
          <div className={Styles.productAuction}>Sắp đấu giá</div>
          <div className={Styles.showAll}>Xem tất cả</div>
        </span>
        <div>
          <Product />
        </div>
      </div>
      <div>
        <span className={Styles.productComing}>
          <div className={Styles.productAuction}>Đấu giá thành công</div>
          <div className={Styles.showAll}>Xem tất cả</div>
        </span>
        <div className={Styles.ComingUp}>
          <ProductSlider />
        </div>
      </div>
      <div>
        <span className={Styles.productComing}>
          <div className={Styles.productAuction}>Đối tác của chúng tôi</div>
          <div className={Styles.showAll}>Xem tất cả</div>
        </span>
        <div>
        </div>
        <div className={Styles.ComingUp}>
          <PartnerSlide />
        </div>
      </div>
    </div>
    // <div className={Styles.container}>
    //   <div className={Styles.imageWithContent}>
    //     <img className={Styles.image} />
    //     <div className={Styles.content}>
    //       <h1>Tìm kiếm đồ cổ chờ đấu giá</h1>
    //       <div className={Styles.form}>
    //         <input type="text" className={Styles.searchinput} placeholder="Nhập đồ cổ bạn muốn tìm?"/>
    //         <button className={Styles.searchbutton}>Tìm kiếm</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={Styles.productList}>
    //     <div className={Styles.centerContent}>
    //       <p className={Styles.p1}>Có 136 biển số chờ đấu giá</p>
    //       <p className={Styles.p2}>Xem tất cả</p>
    //     </div>
    //     <div className={Styles.crossbar}></div>
    //     <div className={Styles.product}>
    //       <Product />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home

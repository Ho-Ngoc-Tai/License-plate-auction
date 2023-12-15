import React from 'react';
import Product from '../Product/Product';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const products = [
  {
    id: 1,
    category: 'Xe con',
    address: 'Tây Ninh',
    favorites: 10,
    remainingTime: '2 ngày 12 giờ 20 phút',
    imageUrl: 'https://example.com/product1.jpg', // Thay thế bằng URL hình ảnh sản phẩm thực tế
  },
  {
    id: 2,
    category: 'Máy tính xách tay',
    address: 'Hồ Chí Minh',
    favorites: 5,
    remainingTime: '3 ngày 6 giờ 40 phút',
    imageUrl: 'https://example.com/product2.jpg', // Thay thế bằng URL hình ảnh sản phẩm thực tế
  },
  // Thêm các sản phẩm khác tại đây với URL hình ảnh thực tế
];

function ProductSlide() {
  return (
    <div className='product-slide-container'>
      <Carousel
        infiniteLoop={true} // Cho phép lặp vô hạn
        autoPlay={true} // Tự động chuyển slide
        showThumbs={false} // Ẩn thanh điều hướng thumbnail
        interval={4000} // Thời gian tự động chuyển slide (đơn vị: milliseconds)
        transitionTime={1000} // Thời gian chuyển slide (đơn vị: milliseconds)
      >
        {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
      </Carousel>
    </div>
  );
}

export default ProductSlide;

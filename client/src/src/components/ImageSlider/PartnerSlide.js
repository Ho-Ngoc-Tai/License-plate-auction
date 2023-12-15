import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const slideImages = [
    {
      index: 1,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/agribank-3_1591454954.png',
    },
    {
      index: 2,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/nam-a-bank-9_1591455672.png',
    },
    {
      index: 3,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/2_1591452240.png',
    },
    {
      index: 4,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/ngan-hang-mb_1591453121.png',
    },
    {
      index: 5,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/cap-nuoc-2_1591453346.png',
    },
    {
      index: 6,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/evn2_1591454133.png',
    },
    {
      index: 7,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/e_1591452345.png',
    },
    {
      index: 8,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/mobifone-3_1591454650.png',
    },
    {
      index: 9,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/buu-dien_1591453791.png',
    },
    {
      index: 10,
      url: 'https://static.daugiarongviet.vn/uploaded/partners/ocb1_1591452597.png',
    },
  ];

const PartnerSlider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {slideImages.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default PartnerSlider;

import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

const slideImages = [
    {
      url: 'https://static.daugiarongviet.vn/uploaded/slide/dau-gia-rong-viet-1_1663042382.jpg',
    },
    {
      url: 'https://static.daugiarongviet.vn/uploaded/slide/dau-gia-rong-viet-2_1663042390.jpg',
    },
    {
      url: 'https://static.daugiarongviet.vn/uploaded/slide/dau-gia-rong-viet-3_1663055975.jpg',
    },
  ];

const divStyle = {
    display: 'flex',
    aligniterm: 'center',
    justifyContent: 'center',
    height: "400px",
    backgroundSize: 'cover'
}

const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#000000"
}

function ImageSlider() {
  return (
    <div className='slide-container'>
        <Slide>
            {slideImages.map((image, index) => (
                <div key = {index}>
                    <div style={{...divStyle, backgroundImage: `url(${image.url})`}}>
                        <span style={{spanStyle}}>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default ImageSlider
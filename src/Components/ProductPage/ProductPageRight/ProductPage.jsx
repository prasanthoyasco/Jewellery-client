import React from 'react';
import './ProductPage.css';
import { ProductPageImages } from '../../../assets/productRingImage';
import Slider from "react-slick";
import useWindowWidth from './useWindowWidth';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductPage() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      {isMobile ? (
        <Slider {...settings} className="mobile-carousel">
          {ProductPageImages.map((media, index) => {
            const isVideo = media.endsWith('.mp4');
            return (
              <div key={index} className="carousel-item">
                {isVideo ? (
                  <video controls className="product-page-video">
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media}
                    alt={`Product ${index}`}
                    className="product-page-image"
                  />
                )}
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="product-media-container">
          {ProductPageImages.map((media, index) => {
            const isVideo = media.endsWith('.mp4');
            return (
              <div key={index} className="product-media-item">
                {isVideo ? (
                  <video controls className="product-page-video">
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media}
                    alt={`Product ${index}`}
                    className="product-page-image"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductPage;

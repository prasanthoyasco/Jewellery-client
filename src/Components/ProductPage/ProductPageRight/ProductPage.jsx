import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ✅ Needed to get `id` from URL
import Slider from "react-slick";
import useWindowWidth from './useWindowWidth';
import { getProductbyid } from '../../../api/productApi';

import './ProductPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductPage() {
  const { id } = useParams(); // ✅ extract product ID from URL
  const [productimages, setProductimages] = useState(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductbyid(id);
        setProductimages(res.data.images);
        console.log(res);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    if (id) fetchData();
  }, [id]);
console.log(productimages);

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

  if (!productimages) {
    return <div>Loading...</div>; // You can replace this with a skeleton
  }

  return (
    <div>
      {isMobile ? (
        <Slider {...settings} className="mobile-carousel">
          {productimages.map((media, index) => {
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
                    key={index}
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
          {productimages.map((media, index) => {
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

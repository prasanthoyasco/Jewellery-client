import React, { useEffect, useState } from 'react';
import './ProductPageLeft.css';
import image1 from '../../../assets/diamond.svg';
import image2 from '../../../assets/Ellipse.svg';
import image3 from '../../../assets/Gold.svg';
import image4 from '../../../assets/gold1.svg';
import ProductSize from '../ProductSize/ProductSize'
import ProductDelevery from '../ProductDelevery/ProductDelevery';
import ProductWaranty from '../ProductWaranty/ProductWaranty';
import ProductOffer from '../ProductOffer/ProductOffer';
import CustomerLove from '../CustomerLove/CustomerLove';
import ProductDetails from '../ProductDetails/ProductDetails';
const goldDiamond = [
  { images: image1, text: 'Karat' },
  { images: image2, text: '1.297gm' },
  { images: image3, text: 'GH-12' },
  { images: image4, text: '9Diamonds' },
];
function ProductPageLeft() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % goldDiamond.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [
    goldDiamond[currentIndex],
    goldDiamond[(currentIndex + 1) % goldDiamond.length],
  ];

  return (
    <div className='product-page-left'>
      <div className='product-price-list'>
        <div className='product-page-price'>
          <h1>₹18,213</h1>
          <div className='product-page-icon'>
            <i className='bi bi-heart'></i>
            <i className='bi bi-share-fill'></i>
          </div>
        </div>
        <p>Whispering Waves 14 Kt Gold & Diamond Ring</p>
        <hr />
        <div className="goldDiamond">
            <div className="goldDiamond-track">
                {visibleItems.map((content, index) => (
                    <div className="goldDiamond-content" key={index}>
                        <img src={content.images} alt="" />
                        <p>{content.text}</p>
        </div>
        ))}
        </div>
        </div>

      </div>
    <ProductSize/>
    <ProductDelevery/>
    <ProductWaranty/>
    <ProductOffer/>
    <CustomerLove/>
    <ProductDetails/>
    </div>
  );
}

export default ProductPageLeft;

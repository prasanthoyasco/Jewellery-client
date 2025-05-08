import React, { useState } from 'react';
import './BestSale.css';
import image1 from '../../assets/catagories-image1.jpg';
import image2 from '../../assets/catagories-image2.webp';
import image3 from '../../assets/catagories-image3.webp';
import image4 from '../../assets/catagories-image4.webp';
import image5 from '../../assets/catagories-image11.jpg';
import image6 from '../../assets/catagories-image6.jpg';
import image7 from '../../assets/catagories-image7.jpg';
import image8 from '../../assets/catagories-image8.jpg';
import image9 from '../../assets/catagories-image9.jpg';
import image10 from '../../assets/catagories-image10.webp';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Elegant Charm Gold and Diamond...",
    price: "₹1,03,065",
    image: image1,
  },
  {
    id: 2,
    name: "Lustrous Knot Pearl & Gold Chain",
    price: "₹31,232",
    image: image2,
  },
  {
    id: 3,
    name: "Dazzling Chic Gold & Diamond Ho...",
    price: "₹48,467",
    image: image3,
  },
  { id: 4, name: "Floral Gold Stud Earrings", price: "₹26,359", image: image4 },
  {
    id: 5,
    name: "Delicate Mangalsutra Chain",
    price: "₹73,159",
    image: image5,
  },
  {
    id: 6,
    name: "Shimmering Diamond Necklace",
    price: "₹99,234",
    image: image6,
  },
  { id: 7, name: "Gleaming Gold Bracelet", price: "₹45,678", image: image7 },
  { id: 8, name: "Luxury Diamond Ring", price: "₹1,20,789", image: image8 },
  { id: 9, name: "Opulent Gold Earrings", price: "₹55,876", image: image9 },
  { id: 10, name: "Radiant Pearl Necklace", price: "₹68,243", image: image10 },
];

const BestSale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const nextProduct = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // Match CSS duration
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };
  const getVisibleProducts = () => {
    const visibleProducts = [];
    const productCount = products.length;

    // Always show 5 products centered around currentIndex
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + productCount) % productCount;
      visibleProducts.push(products[index]);
    }

    return visibleProducts;
  };

  // const nextProduct = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  // };

  // const prevProduct = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  // };

  return (
    <>
      <div className="best-sale-text">
        <h1>Our BestSeller</h1>
        <p className="my-3">Select from BestSeller</p>
      </div>
      <div className="best-sale-container">
        <button className="slider-btn prev-btn" onClick={prevProduct}>
        <i className="bi bi-arrow-left"></i>
        </button>

      <div className={`best-sale-images ${animate ? 'slide' : ''}`}>
  {getVisibleProducts().map((item, index) => (
    <div key={`${item.id}-${index}`} className={`best-sale-img-div index-${index}`}>
      <img 
  src={item.image} 
  className="best-sale-image" 
  alt={item.name} 
  onClick={() => navigate(`/product/${item.id}`, { state: item })}/>
    </div>
  ))}
</div>

        <button className="slider-btn next-btn" onClick={nextProduct}>
        <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <div class="stars-bg"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
    </>
  );
};

export default BestSale;

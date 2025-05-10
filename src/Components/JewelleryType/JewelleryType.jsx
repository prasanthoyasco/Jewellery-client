// src/components/JewelleryType/JewelleryType.js
import React, { useEffect, useState } from 'react';
import './JewelleryType.css';
import Navbar from '../Navbar/Navbar';
import SortFilterButtons from '../SortFilterButtons/SortFilterButtons';
import { useLikedItems } from '../LikedItemsContext/LikedItemsContext';
import { useNavigate } from 'react-router-dom';
import jewelImage1 from '../../assets/jewel-type.webp';
import jewelImage2 from '../../assets/jewel-type2.jpg';
import jewelImage3 from '../../assets/jewel-type3.webp';
import jewelImage4 from '../../assets/jewel-type4.webp';
import jewelImage5 from '../../assets/jewel-type5.webp';
import jewelImage6 from '../../assets/jewel-type6.webp';
import jewelImage7 from '../../assets/jewel-type7.webp';
import jewelImage8 from '../../assets/jewe.webp';

const gidText = [
  {
    id:1,
    image: jewelImage1,
    stock: 'Only 1 stock Available',
    price: '4,999',
    priceValue: 4999,
    category: 'Pendant',
    text: 'The Tell-Tale Heart Yellow Gold Pendant',
    name: "Radiant Pearl Necklace",
  },
  {
    id:2,
    image: jewelImage2,
    stock: 'Only 2 stock Available',
    price: '5,999',
    priceValue: 5999,
    category: 'Pendant',
    text: 'Floral Whispers 14 Kt Gold & Pearl Pendant',
    name: "Opulent Gold Earrings",
  },
  {
    id:3,
    image: jewelImage3,
    stock: 'Only 3 stock Available',
    price: '6,999',
    priceValue: 6999,
    category: 'Nose Pin',
    text: '14KT Yellow Gold Diamond Nose Pin',
    name: "Luxury Diamond Ring",
  },
  {
    id:4,
    image: jewelImage4,
    stock: 'Only 2 stock Available',
    price: '7,999',
    priceValue: 7999,
    category: 'Earrings',
    text: 'Lavender Love Amethyst Drop Earrings',
    name: "Gleaming Gold Bracelet",
  },
  {
    id:5,
    image: jewelImage5,
    stock: 'Only 1 stock Available',
    price: '8,999',
    priceValue: 8999,
    category: 'Pendant',
    text: 'Golden Elegance 18KT Pearl Pendant',
    name: "Floral Gold Stud Earrings",
  },
  {
    id:6,
    image: jewelImage6,
    stock: 'Only 2 stock Available',
    price: '9,999',
    priceValue: 9999,
    category: 'Pendant',
    text: 'The Tell-Tale Heart Yellow Gold Pendant',
    name: "Delicate Mangalsutra Chain",
  },
  {
    id:7,
    image: jewelImage7,
    stock: 'Only 3 stock Available',
    price: '10,999',
    priceValue: 10999,
    category: 'Pendant',
    text: 'The Tell-Tale Heart Yellow Gold Pendant',
    name: "Elegant Charm Gold and Diamond...",
  },
  {
    id:8,
    image: jewelImage8,
    stock: 'Only 2 stock Available',
    price: '11,999',
    priceValue: 11999,
    category: 'Pendant',
    text: 'The Tell-Tale Heart Yellow Gold Pendant',
    name: "Lustrous Knot Pearl & Gold Chain",
  },
];

const pinkDivText = [
  { text: 'Because She deserves the best!' },
  { text: "A Mother's Day treat!" },
  { text: 'Celebrate her sparkle with Mia!' },
];

const filterButtonList = [
  { text: '< 10K' },
  { text: 'Rings' },
  { text: 'Earrings' },
  { text: '< 25K' },
  { text: 'Pendant' },
  { text: 'Diamond' },
  { text: '22 KT' },
];

function JewelleryType() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(null);
  const { likedItems, toggleLike } = useLikedItems();
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const navigate = useNavigate()



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pinkDivText.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredData = gidText.filter((item) => {
    if (!activeFilter) return true;
    if (activeFilter === '< 10K') return item.priceValue < 10000;
    if (activeFilter === '< 25K') return item.priceValue < 25000;
    return item.category?.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className='jewellery-type-container'>
      <Navbar />
      <div className='pink-color-div'>
        <h5 className='animated-text'>{pinkDivText[currentIndex].text}</h5>
      </div>

      <div className='filter-btn-div'>
        {filterButtonList.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${activeFilter === filter.text ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.text)}
          >
            {filter.text}
          </button>
        ))}
        <button className='filter-btn reset-btn' onClick={() => setActiveFilter(null)}>
          Reset
        </button>
      </div>

      <div className='jewel-grid'>
        {filteredData.map((data, index) => {
          const isLiked = likedItems.some((item) => item.text === data.text);
          return (
            <div className='jewel-card' key={index} onClick={() => navigate(`/product/${data.id}`, { state: data })}>
              <div className='image-container'>
                <img src={data.image} alt={data.text} />
                <i
                  className={`bi bi-heart${isLiked ? '-fill' : ''} heart-icon`}
                  onClick={() => toggleLike(data)}
                ></i>
              </div>
              <div className='jewel-card-details'>
                <p className='stock'>{data.stock}</p>
                <h2 className='price-btn'>₹ {data.price}</h2>
                <p className='description'>{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <SortFilterButtons
  onSortChange={(sortOption) => {
    if (sortOption === 'open') setShowSortModal(true); // Open the Sort Modal
  }}
  onFilterChange={(filterOption) => {
    if (filterOption === 'open') setShowFilterModal(true); // Open the Filter Modal
  }}
/>

{showSortModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3>Sort & Filter Options</h3>
      <div className="modal-btns">
        {filterButtonList.map((filter, index) => (
          <button
            key={index}
            className="modal-filter-btn"
            onClick={() => {
              setActiveFilter(filter.text);
              setShowSortModal(false);
            }}
          >
            {filter.text}
          </button>
        ))}
        <button
          className="modal-filter-btn reset-btn"
          onClick={() => {
            setActiveFilter(null);
            setShowSortModal(false);
          }}
        >
          Reset
        </button>
        <button className="modal-close-btn" onClick={() => setShowSortModal(false)}>
          Close
        </button>
      </div>
    </div>
  </div>
)}

{showFilterModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3>Filter Options</h3>
      <div className="modal-btns">
        {filterButtonList.map((filter, index) => (
          <button
            key={index}
            className="modal-filter-btn"
            onClick={() => {
              setActiveFilter(filter.text);
              setShowFilterModal(false); // Close modal after applying filter
            }}
          >
            {filter.text}
          </button>
        ))}
        <button
          className="modal-filter-btn reset-btn"
          onClick={() => {
            setActiveFilter(null);
            setShowFilterModal(false); // Close modal after resetting filter
          }}
        >
          Reset
        </button>
        <button className="modal-close-btn" onClick={() => setShowFilterModal(false)}>
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default JewelleryType;


import React from 'react';
import './LikePages.css';
import Navbar from '../Navbar/Navbar';
import { useLikedItems } from '../LikedItemsContext/LikedItemsContext';

function LikesPage() {
    const { likedItems } = useLikedItems();


  return (
    <div className='jewellery-type-container'>
      <Navbar />
      <div className='pink-color-div'>
        <h5 className='animated-text'>Your Liked Jewellery</h5>
      </div>

      {likedItems.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No liked items yet!</p>
      ) : (
        <div className='jewel-grid'>
          {likedItems.map((item, index) => (
            <div className='jewel-card' key={index}>
              <div className='image-container'>
                <img src={item.image} alt={item.text} />
                <i className='bi bi-heart-fill heart-icon'></i>
              </div>
              <p className='stock'>{item.stock}</p>
              <h2 className='price-btn'>₹ {item.price}</h2>
              <p className='description'>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikesPage;

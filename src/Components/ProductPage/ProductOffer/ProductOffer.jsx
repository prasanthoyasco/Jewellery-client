import React, { useState } from 'react';
import './ProductOffer.css';
import offerImage from '../../../assets/discount-component.svg';

function ProductOffer() {
  const [showOffer, setShowOffer] = useState(false);

  const toggleOffer = () => {
    setShowOffer(prev => !prev);
  };

  return (
    <div className='product-offer-container'>
      <div className='product-offer-heading' onClick={toggleOffer}>
        <div className='offer-heading-image'>
          <img src={offerImage} alt="Offer" />
          <h5>Available Offers</h5>
        </div>
        <i className={`bi ${showOffer ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
      </div>

      {showOffer && (
        <div className='pink-div'>
          <div className='offer-percent'>
            <p>Flat</p>
            <h3>₹500/- Off</h3>
          </div>
          <p>Applicable for your first purchase</p>
          <hr />
          <div className='coupon-div'>
            <p>Use coupon code:</p>
            <div className='coupon-code'>
              <h5>MIA500</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOffer;

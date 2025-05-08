import React from 'react'
import './ProductDelevery.css'

import delevery from '../../../assets/availability-check-pdp.svg'

function ProductDelevery() {
  return (
    <div className="delevery-card">
        <div className="delevery-header">
          <img src={delevery}/>
          <span>Delivery Details</span>
        </div>
        <div className="delivery-form">
          <div className="country-select">
            <img src="https://flagcdn.com/w40/in.png" alt="India" />
            <span>IN <i class="bi bi-chevron-down"></i></span>
          </div>
          <input type="text" className="pincode-input" placeholder="Pincode" />
          <button className="check-btn">Check Availability</button>
        </div>
      </div>
  )
}

export default ProductDelevery

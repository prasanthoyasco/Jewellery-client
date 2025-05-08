import React from 'react';
import './PaymentPage.css';
import paymentCard from '../../assets/payment-online.png';
import giftCard from '../../assets/Giftcard.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
function PaymentPage() {
  const { state: product } = useLocation(); // Access the passed product data
  const navigate = useNavigate();
  if (!product) {
    return <div>No product data available</div>;
  }

  // --- Sanitize and format price ---
  const cleanPrice = Number(product.price?.toString().replace(/[^0-9.]/g, '') || 0);
  const formattedPrice = cleanPrice.toLocaleString('en-IN');

  return (
    <>   
    <Navbar/> 
    <div className="payment-page-container">
      <div className="left-container">
        <div className="payment-page-card">
          <div className="image-text">
            <img src={paymentCard} className="payment-image" alt="Payment" />
            <h3>Pay</h3>
          </div>
          <input type="checkbox" className="input-pay" />
        </div>
      </div>

      <div className="right-container">
        <div className="payment-page-card">
          <div className="gift-imge-text">
            <img src={giftCard} alt="Gift Card" />
            <h3>Have a gift card</h3>
          </div>
          <button>Apply</button>
        </div>

        <div className="payment-card" style={{marginTop:"5%"}}>
          <h2 className="payment-title">
            Payment Details <span className="item-count">(1 item)</span>
          </h2>
          <div className="payment-row">
            <span>Sub Total</span>
            <span className="amount">₹ {formattedPrice}</span>
          </div>
          <div className="divider"></div>
          <div className="payment-row">
            <span>Delivery Charge</span>
            <span className="free">FREE</span>
          </div>
          <div className="grand-total-box">
            <div className="payment-row">
              <strong>GRAND TOTAL</strong>
              <strong className="grand-amount">₹ {formattedPrice}</strong>
            </div>
          </div>
        </div>

        {/* Cart Item Preview */}
        <div className="cart-item">
          <div className="card">
            <div className="item-left">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="item-right">
              <div className="item-header">
                <h2>₹ {formattedPrice}</h2>
                <i className="bi bi-trash3"></i>
              </div>
              <p className="item-name">{product.name}</p>
              <div className="item-details">
                <span className="badge">Qty: 1</span>
                <span className="badge">Size: 18 INCHES</span>
                <span className="badge">Weight: 5.348 g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="payment-route-container">
      <div className="product-details">
        <img src={product?.image} alt={product?.name} />
        <h1>{product?.price}</h1>
        <p>{product?.name}</p>
      </div>

      {/* You can now access the product details here */}
      <button onClick={() => navigate('/pay', { state: product })} className='payment-btn'>
        Continue
      </button>
    </div>
    </>

  );
}

export default PaymentPage;

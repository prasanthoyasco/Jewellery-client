import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentRoute.css';

function PaymentRoute() {
  const { state: product } = useLocation(); // Get the data passed through navigate
  const navigate = useNavigate();

  return (
    <div className="payment-route-container">
      <div className="product-details">
        <img src={product?.image} alt={product?.name} />
        <h1>{product?.price}</h1>
        <p>{product?.name}</p>
      </div>

      {/* You can now access the product details here */}
      <button onClick={() => navigate('/payment-page', { state: product })} className='payment-btn'>
        Continue
      </button>
    </div>
  );
}

export default PaymentRoute;

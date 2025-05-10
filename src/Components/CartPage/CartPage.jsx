import React, { useState, useEffect } from 'react';
import './CartPage.css';
import deleveryImage from '../../assets/availability-check-pdp.svg';
import ProductImage from '../../assets/jewel-type5.webp';
import warantyImages from '../../assets/TATA.svg';
import warantyImages1 from '../../assets/bis.svg';
import warantyImages2 from '../../assets/0ne-year-waranty.svg';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../CartContext/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';

const images = [warantyImages, warantyImages1, warantyImages2];

function CartPage() {
  const [showPincodeInput, setShowPincodeInput] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const togglePincode = () => setShowPincodeInput((prev) => !prev);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { cartItems } = useCart();
  const { state: product } = useLocation(); // Get the data passed through navigate
  const navigate = useNavigate();
  // Ensure there's a product in the cart
  const products = cartItems[0];
  
  // Check if the product exists and get its price, defaulting to '0' if not
  const productPrice = products?.price || 0;

  // Formatting the product price for display (₹ 1,04,165)
  const formattedPrice = productPrice.toLocaleString('en-IN');

  const paymentData = [
    { label: 'Sub Total', value: `₹ ${formattedPrice}` },
    { label: 'You Saved', value: '– ₹ 0', className: 'green-text' },
    { label: 'Discount', value: '– ₹ 0' },
    { label: 'Delivery Charge', value: 'FREE' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimate(false);
      }, 500); // duration should match CSS animation
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className='cart-page-container'>
        <h1 className='header-text'>Cart</h1>
        <div className='cart-page'>
          <div className='cart-left'>
            <div className="delevery-availability-div">
              <div className="availability-left">
                <div className="delevery-image-heading">
                  <img src={deleveryImage} alt="delivery" />
                  <h5>Check Availability</h5>
                </div>
                {showPincodeInput && (
                  <div className="pincode-input-section">
                    <div className="country-select">
                      <img src='https://flagcdn.com/w40/in.png'/>
                      <select>
                        <option value="IN">IN</option>
                      </select>
                    </div>
                    <input type="text" placeholder="Enter pincode" />
                    <button className="check-btn">Check availability</button>
                  </div>
                )}
              </div>

              {!showPincodeInput && (
                <a href="#" onClick={togglePincode}>pincode</a>
              )}
            </div>

            <div className="cart-item">
              <div className='card'>
                <div className="item-left">
                  <img src={ProductImage} alt="product" />
                </div>

                <div className="item-right">
                  <div className="item-header">
                    <h2>₹ {formattedPrice}</h2>
                    <i className="bi bi-trash3"></i>
                  </div>
                  <p className="item-name">Elegant Charm Gold and Diamond Mangalsutra</p>

                  <div className="item-details">
                    <span className="badge">Qty: 1</span>
                    <span className="badge">Size: 18 INCHES</span>
                    <span className="badge">Weight: 5.348 g</span>
                  </div>
                </div>
              </div>

              <label className="gift-checkbox">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={() => setIsGift((prev) => !prev)}
                />
                <span>Is this a gift?</span>
              </label>

              {isGift && (
                <textarea
                  className="gift-textarea"
                  placeholder="Enter a gift message (optional)"
                ></textarea>
              )}
            </div>
          </div>

          <div className="payment-summary-card">
            <div className="coupon-header">
              <div className="coupon-info">
                <img src={deleveryImage} alt="Apply Coupons" />
                <div>
                  <h4>Apply Coupons</h4>
                  <p>Coupons available</p>
                </div>
              </div>
              <button className="view-btn">View</button>
            </div>

            <h3 className="payment-title">Payment Details <span>(1 Item)</span></h3>

            {paymentData.map((item, index) => (
              <div key={index} className="payment-detail-row">
                <span>{item.label}</span>
                <span className={item.className || ''}>{item.value}</span>
              </div>
            ))}

            <div className="grand-total-row">
              <span>Grand Total</span>
              <span>₹ {formattedPrice}</span>
            </div>

            <div className="waranty-page-container">
              <div className={`image-wrapper ${animate ? 'slide-up' : ''}`}>
                <img src={images[currentIndex]} alt="warranty" />
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
      <button onClick={() => navigate('/checkout', { state: product })} className='payment-btn'>
        Continue
      </button>
    </div>
    </>
  );
}

export default CartPage;

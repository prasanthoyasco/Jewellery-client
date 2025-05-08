import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext/CartContext';
import './AddToCartNav.css';

function AddToCartNav() {
  const { state: product } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="add-to-cart-container">
      <div className="product-details">
        <img src={product?.image} alt={product?.name} />
        <h1>{product?.price}</h1>
        <p>{product?.name}</p>
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => navigate('/checkout', { state: product })}>Buy Now</button>


      {/* Display below */}
      <h3>Preview Item:</h3>
    </div>
  );
}

export default AddToCartNav;

import React, { useEffect, useState } from 'react';
import './BestSalers.css';
import { getProducts } from '../../api/productApi';
import './Tooltip.css'; 

function BestSalers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "5%" }}>
      <div className='Best-seller-head'>
        <h1>Best Sellers</h1>
        <button className="btn see-more-btn">See more</button>
      </div>

      <div className="bestSalers-grid">
        {products.map((item, index) => (
          <div key={index} className="card">
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="producttest">
              <div className="producttext">
                <h5>{item.name}</h5>
              </div>
              <p className="fs-6">Karat: {item.karat}</p>
              <p className="fs-6">{item.shortdiscription}</p>

              <h6 className="price">
                Price: ₹{item.price.toLocaleString('en-IN')}
                <div className="tooltip-container">
                  <i className="bi bi-info-circle info-icon"></i>
                  <div className="tooltip-box">
                    <p><span style={{fontWeight:'400'}}> Weight: </span> {item.weight} gm</p>
                    <p><span style={{fontWeight:'400'}}>Gold Price:</span> ₹ {item.goldRatePerGram.toLocaleString('en-IN')} per/gm</p>
                    <p><span style={{fontWeight:'400'}}>Making: </span>{item.makingCostPercent}% = ₹ {item.makingCost.toLocaleString('en-IN')}</p>
                    <p><span style={{fontWeight:'400'}}>Wastage:</span> {item.wastagePercent}% = ₹ {item.wastageCost.toLocaleString('en-IN')}</p>
                    <p><span style={{fontWeight:'400'}}>Total:  </span><br/> ({item.goldRatePerGram.toLocaleString('en-IN')} × {item.weight}) = ₹ {(item.goldRatePerGram*item.weight).toLocaleString('en-IN')} <br/>+ {item.makingCost.toLocaleString('en-IN')} <br/> + {item.wastageCost.toLocaleString('en-IN')}  <br/>= {item.price.toLocaleString('en-IN')}</p>
                    
                  </div>
                </div>
              </h6>

              <button className="btn buy-now-btn">Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSalers;

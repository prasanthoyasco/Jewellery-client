import React from 'react';
import './CustomerLove.css';
import iconsImage1 from '../../../assets/design-of-product.svg'
import iconsImage2 from '../../../assets/value-for-money.svg'
import iconsImage3 from '../../../assets/unboxing-experience.svg'
import iconsImage4 from '../../../assets/product-variety.svg'
import headerImage from '../../../assets/statistics.svg'
const data = [
  {
    title: 'Design of Product',
    users: 7255,
    percentage: 93,
     icon: iconsImage1,
  },
  {
    title: 'Value for Money',
    users: 6645,
    percentage: 91,
    icon: iconsImage2,
  },
  {
    title: 'Unboxing Experience',
    users: 1849,
    percentage: 95,
    icon: iconsImage3,
  },
  {
    title: 'Product Variety',
    users: 14900,
    percentage: 94,
    icon: iconsImage4,
  },
];

function CustomerLove() {
  return (
    <div className="customer-love-container">
      <div className='customer-love-header'>
        <img src={headerImage}/>
        <h5>What Our Customers Love</h5>
      </div>
      <div className='progress-bar-container'>
      {data.map((item, index) => (
        <div key={index} className="love-item">
          <div className="love-title">
            {item.title} <span className="users">({item.users} users)</span>
          </div>
          <div className='bar-and-content'>
            <img src={item.icon}/>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${item.percentage}%` }}></div>
            
        </div>
        <div className="percentage">{item.percentage}%</div>
        </div>
 
        </div>
      ))}
      </div>
      <div className='customer-love-a-tag'>
        <a href="#" className="explore-link">Explore Mia Stories</a>
      </div>
    </div>
  );
}

export default CustomerLove;

import React from 'react'
import './ShopImage.css'
import ShopImg from '../../assets/Store_Locator-01.webp'
function ShopImage() {
  return (
    <div className='Shop-img-div'>
      <img src={ShopImg} className='Shop-Img'/>
      <div className='Shop-Img-words'>
        <p>Locate your nearest</p>
        <h1>Mia Store</h1>
        <p>For an exquisite jewellery experience</p>
        <button>find store</button>
      </div>
    </div>
  )
}

export default ShopImage

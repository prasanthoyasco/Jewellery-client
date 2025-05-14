import React from 'react'
import './Poster.css'
import posterImage from '../../assets/Alaghbanda.png'
function Poster() {
  return (
    <div className='poster'>
      <img src={posterImage} className='poster-img'/>
      <h3>Photos cannot convey all the beauty.
        Shine and versatility of our jewelry.
        In reality,they lookeven better
      </h3>
    </div>
  )
}

export default Poster

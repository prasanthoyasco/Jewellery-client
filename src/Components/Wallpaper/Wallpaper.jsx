import React from 'react'
import './Wallpaper.css'
import wallpaper from '../../assets/wallpaper.jpg'
function Wallpaper() {
  return (
    <div className='Hero-img'>
      <img src={wallpaper} className='wallpaper-image'/>
    </div>
  )
}

export default Wallpaper

import React from 'react'
import './Wallpaper.css'
import wallpaper1 from '../../assets/wallpaper.jpg'
import wallpaper2 from '../../assets/wallpaper2.jpg'
import wallpaper3 from '../../assets/wallpaper3.jpg'
function Wallpaper() {
  return (
    <div id="wallpaperCarousel" className="carousel slide carousel-fade mt-3" data-bs-ride="carousel" data-bs-interval="3000">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={wallpaper1} className="d-block w-100 wallpaper-image" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src={wallpaper2} className="d-block w-100 wallpaper-image" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src={wallpaper3} className="d-block w-100 wallpaper-image" alt="Slide 3" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#wallpaperCarousel" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#wallpaperCarousel" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
    </div>
  )
}

export default Wallpaper

import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import Divisions from '../Divisions/Divisions'
import Wallpaper from '../Wallpaper/Wallpaper'
import BestSalers from '../BestSalers/BestSalers'
import Payments from '../Payments/Payments'
import Poster from '../Poster/Poster'
import Benifits from '../Benifits/Benifits'
import Footer from '../Footer/Footer'
function HomePage() {
  return (
    <div style={{margin:"0px 30px"}}>
      <Navbar/>
      <Wallpaper/>
      <BestSalers/>
      <Benifits/>
      <Poster/>
      <Payments/>
      <Footer/>
    </div>
  )
}

export default HomePage

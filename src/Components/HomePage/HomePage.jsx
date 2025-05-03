import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import Divisions from '../Divisions/Divisions'
import Wallpaper from '../Wallpaper/Wallpaper'
import BestSalers from '../BestSalers/BestSalers'
import Payments from '../Payments/Payments'
import Lookbook from '../Lookbook/Lookbook'
import Benifits from '../Benifits/Benifits'
import Footer from '../Footer/Footer'
import img from '../../assets/Ringspng.png'
function HomePage() {
  const hotspots = [
    {
      left: "52.65%",
      top: "20.01%",
      thumb: `${img}`,
      title: "Eligent Finger Ring",
      link: "/shop-details",
      price: `<del>₹ 150000</del> <ins>₹ 100000</ins>`,
      contentStyle: { right: '33px', top: '10px' }
    },
    {
      left:"63.65%",
      top:"62.01%",
      thumb: `${img}`,
      title: "Medium Flat Hoops",
      link: "/shop-details",
      price: `<del>₹ 150.00</del> <ins>₹ 100.00</ins>`,
      contentStyle: { right: '33px', top: '10px' }
    },

  ];
  
  return (
    <>
       {/* <Navbar/> */}
    <div style={{margin:"0px 30px"}}>
      <Wallpaper/>
      {/* <BestSalers/> */}
      <Benifits/>
      {/* <Poster/> */}
      <Lookbook hotspots={hotspots} />
      <Payments/>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage

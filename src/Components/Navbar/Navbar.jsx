import React from 'react'
import './Navbar.css'
import Atelierlogo from '../../assets/Atelier-logo-nav.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar() {
  return (
    <div className='Navbar-icons-headings'>
      <a className='d-flex align-items-center text-decoration-none' href=''><i className="bi bi-telephone fs-4"></i><span className='fs-6 mx-2'> +91 98775 65432</span></a>
      <div style={{textAlign:"center"}} className='Logo'>
        <img src={Atelierlogo} alt="Atelier" height={"70px"} style={{marginTop:"10px"}}/>
        <p className=''>Jewellery</p>
      </div>
      <div className='Navbar-right-icons'>
        <a href='/likes'><i className="bi bi-heart fs-4"></i></a>
        <a href='/cart'><i className="bi bi-search fs-4"></i></a>
        <a href='/search'><i className="bi bi-bag fs-4"></i></a>
      </div>
    </div>
  )
}

export default Navbar

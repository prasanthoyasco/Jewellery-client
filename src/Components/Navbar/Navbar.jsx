import React from 'react';
import './Navbar.css';
import Atelierlogo from '../../assets/Atelier-logo-nav.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-mobile">
        <a className="navbar-logo-mobile" href="/">
          <img src={Atelierlogo} alt="Atelier" height="50px" />
          <span className="logo-text-mobile">Jewellery</span>
        </a>
        <button className="hamburger-menu">
          <i className="bi bi-list fs-3"></i>
        </button>
      </div>
      <div className="navbar-desktop">
        <div className="navbar-left">
          <a className="d-flex align-items-center text-decoration-none" href="tel:+919877565432">
            <i className="bi bi-telephone fs-4"></i>
            <span className="fs-6 mx-2">+91 98775 65432</span>
          </a>
        </div>
        <div className="navbar-logo-desktop">
          <img src={Atelierlogo} alt="Atelier" height="70px" style={{ marginTop: '10px' }} />
          <p className="">Jewellery</p>
        </div>
        <div className="navbar-right-icons">
          <a href="/likes"><i className="bi bi-heart fs-4"></i></a>
          <a href="/cart"><i className="bi bi-search fs-4"></i></a>
          <a href="/search"><i className="bi bi-bag fs-4"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
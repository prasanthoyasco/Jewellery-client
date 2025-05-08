import { useEffect, useState } from 'react';
import 'modern-css-reset/dist/reset.min.css';
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductPage from './Components/ProductPage/ProductPageRight/ProductPage';
import ProductPageHome from './Components/ProductPage/ProductPageHome/ProductPageHome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JewelleryType from './Components/JewelleryType/JewelleryType';
import { LikedItemsProvider } from './Components/LikedItemsContext/LikedItemsContext';
import LikesPage from './Components/LikesPage/LikesPage';
import CartPage from './Components/CartPage/CartPage';
function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show Navbar after scrolling 100px (adjust as needed)
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <LikedItemsProvider>
      <Router>
       {showNavbar && <Navbar />}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPageHome/>} />
        <Route path="/category/:categoryName" element={<JewelleryType/>} />
        <Route path="/likes" element={<LikesPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        </Routes>

      </Router>
      </LikedItemsProvider>
    </div>
  )
}

export default App

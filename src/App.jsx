import { useEffect, useState } from 'react';
import 'modern-css-reset/dist/reset.min.css';
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar';

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
       {showNavbar && <Navbar />}
      <HomePage/>
    </div>
  )
}

export default App

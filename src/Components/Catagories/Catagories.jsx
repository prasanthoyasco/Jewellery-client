import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import
import "./Catagories.css";
import { categories } from '../../assets/Catagories-collection';

const ShopByCategory = () => {
  const navigate = useNavigate(); // Step 2: Initialize
  const ref = useRef([]);

  const scrollLeft = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: -900, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: 900, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="mt-5 categoryheading">
        <h1 className='my-3 fade-slide-up' ref={el => ref.current.push(el)}>Shop By Category</h1>
        <p className=' my-3 fade-slide-up' ref={el => ref.current.push(el)} style={{ transitionDelay: "0.2s" }}>Select a category</p>
      </div>
      <div className="shopByCategoryWrapper">
        <button className="shop-by-cat-nav slide-back" onClick={scrollLeft}><i className="bi bi-arrow-left"></i></button>
        <div id="shopByCategorySlider">
          {categories.map((col, index) => (
            <div className={`category-card-col ${col.columnClass}`} key={index}>
              {col.items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/category/${item.label}`)} // Step 3: Navigate on click
                  className={`category-card ${item.bg} ${item.heightClass}`}
                  style={{ backgroundImage: `url(${item.image})`, cursor: 'pointer' }}
                >
                  <div className="category-name">{item.label}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="shop-by-cat-nav slide-next" onClick={scrollRight}><i className="bi bi-arrow-right"></i></button>
      </div>
    </>
  );
};

export default ShopByCategory;

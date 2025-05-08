import{ useEffect, useRef } from 'react';
import "./Catagories.css"; // Assuming you copy styles here
import { categories } from '../../assets/Catagories-collection';

const ShopByCategory = () => {
  const scrollLeft = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: -900, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("shopByCategorySlider").scrollBy({ left: 900, behavior: "smooth" });
  };
const ref = useRef([]);

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
              <a
                key={idx}
                href={item.link}
                className={`category-card ${item.bg} ${item.heightClass}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={`category-name ${item.bg || 'background-default'}`}> {item.label}
</div>

              </a>
            ))}
          </div>
        ))}
      </div>
      <button className="shop-by-cat-nav slide-next" onClick={scrollRight}><i className="bi bi-arrow-right"></i></button>
    </div></>
  );
};

export default ShopByCategory;

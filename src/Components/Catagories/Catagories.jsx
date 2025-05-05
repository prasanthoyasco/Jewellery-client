import React from 'react';
import './Catagories.css';
import { categoryColumns } from '../../assets/Catagories-collection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catagories = () => {
  // Group your data into chunks of 4 columns per slide
  const slides = [];
  const columnsPerSlide = 4;
  
  for (let i = 0; i < categoryColumns.length; i += columnsPerSlide) {
    slides.push(categoryColumns.slice(i, i + columnsPerSlide));
  }

  const settings = {
    dots: false, // Disabled dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="categories-carousel-container">
      <Slider {...settings}>
        {slides.map((slideColumns, slideIndex) => (
          <div key={`slide-${slideIndex}`}>
            <div className="category-grid">
              {slideColumns.map((column, colIndex) => (
                <div className={`category-col col-${column.type}`} key={`col-${slideIndex}-${colIndex}`}>
                  {column.items.map((item, itemIndex) => (
                    <div className={`category-card ${item.height}`} key={`item-${slideIndex}-${colIndex}-${itemIndex}`}>
                      <img src={item.image} alt={item.title} />
                      <div className="category-label">{item.title}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px" }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default Catagories;
import React, { useState, useEffect, useRef } from 'react';
import './Lookbook.css';
import product from '../../assets/lookbook-7-1.jpg';

const Lookbook = ({ hotspots }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const popupRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        activeIndex !== null &&
        popupRefs.current[activeIndex] &&
        !popupRefs.current[activeIndex].contains(e.target)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeIndex]);

  const toggleSpot = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="lookbook-item">
      <div className="lookbook-container">
        <div className="lookbook-content">
          <div className="item">
            <img src={product} alt="Lookbook" />
            {hotspots.map((spot, index) => (
              <div
                className="item-lookbook"
                key={index}
                onClick={() => toggleSpot(index)}
                style={{ left: spot.left, top: spot.top, cursor: 'pointer' }}
              >
                <span className="number-lookbook"  />
                
                {activeIndex === index && (
                  <div
                    ref={(el) => (popupRefs.current[index] = el)}
                    className={`content-lookbook active`}
                    style={spot.contentStyle}
                  >
                    <div className="d-flex">
                      <div className="item-thumb">
                        <a href={spot.link}>
                          <img src={spot.thumb} alt={spot.title} />
                        </a>
                      </div>
                      <div className="content-lookbook-bottom">
                        <div className="item-title">
                          <a href={spot.link}>{spot.title}</a>
                        </div>
                        <span className="price" dangerouslySetInnerHTML={{ __html: spot.price }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;

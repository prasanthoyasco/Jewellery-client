import React, { useState, useEffect, useRef } from 'react';
import './Lookbook.css';
import product from '../../assets/lookbook-7-1.jpg';

const Lookbook = ({ hotspots }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSpot = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="lookbook-item" ref={containerRef}>
      <div className="lookbook-container">
        <div className="lookbook-content">
          <div className="item">
            <img src={product} alt="Lookbook" />
            {hotspots.map((spot, index) => (
              <div
                className="item-lookbook"
                key={index}
                
                style={{ left: spot.left, top: spot.top, cursor: "pointer" }}
              >
                <span className="number-lookbook" onClick={() => toggleSpot(index)} />

                <div
                  className={`content-lookbook ${activeIndex === index ? 'active' : ''}`}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;

import React, { useState, useEffect, useRef } from 'react';
import './Lookbook.css';
import product from '../../assets/lookbook-7-1.jpg';

const Lookbook = ({ hotspots }) => {
  const [showHotspots, setShowHotspots] = useState(false);
  const lookbookRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHotspots(true);

          // Set a timeout to hide hotspots after 5 seconds
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setShowHotspots(false);
          }, 500000); // 5000ms = 5 seconds
        }
      },
      { threshold: 0.3 }
    );

    if (lookbookRef.current) {
      observer.observe(lookbookRef.current);
    }

    return () => {
      if (lookbookRef.current) {
        observer.unobserve(lookbookRef.current);
      }
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="lookbook-item section" ref={lookbookRef}>
      <div className="lookbook-container">
        <div className="lookbook-content">
          <div className="item">
            <img src={product} alt="Lookbook" />
            {hotspots.map((spot, index) => (
              <div
                className="item-lookbook"
                key={index}
                style={{ left: spot.left, top: spot.top }}
              >
                <span className="number-lookbook" />
                <div
                  className={`content-lookbook ${showHotspots ? 'active' : ''}`}
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
                      <span
                        className="price"
                        dangerouslySetInnerHTML={{ __html: spot.price }}
                      />
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

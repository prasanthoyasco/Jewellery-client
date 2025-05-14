import React, { useState } from 'react';
import './ProductSize.css';
import sizeImage from '../../../assets/size-icon.svg';

function ProductSize() {
  const [selectedSize, setSelectedSize] = useState('16.80 MM');
  const [showModal, setShowModal] = useState(false);

  const sizes = ['16.40 MM', '17.20 MM', '16.80 MM'];

  const sizeGuideData = [
    { size: 'Small', diameter: '16.40 MM', label: 'US 6' },
    { size: 'Medium', diameter: '16.80 MM', label: 'US 7' },
    { size: 'Large', diameter: '17.20 MM', label: 'US 8' }
  ];

  return (
    <>
      <div className="option-card">
        <div className="option-header">
          <img src={sizeImage} alt="Size icon" />
          <span>Choose Size</span>
          <a href="#" className="size-guide" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
            Size Guide
          </a>
        </div>
        <div className="size-options">
          {sizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Ring Size Guide</h2>
            <p>Use this chart to find the perfect fit for your ring. Measure the inside diameter of a ring that fits you and match it below.</p>

            <table className="size-guide-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Diameter (MM)</th>
                  <th>Label</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuideData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.size}</td>
                    <td>{item.diameter}</td>
                    <td>{item.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductSize;

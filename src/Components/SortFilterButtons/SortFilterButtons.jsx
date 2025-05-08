import React, { useEffect, useState } from 'react';
import './SortFilterButtons.css';

const SortFilterButtons = ({ onSortChange, onFilterChange }) => {
  const [showButtons, setShowButtons] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(false); // hide while scrolling

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setShowButtons(true); // show again after scrolling stops
      }, 500); // adjust delay as needed

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <>
      <div className={`sort-filter-wrapper-fixed ${showButtons ? 'visible' : 'hidden'}`}>
        <button onClick={() => onSortChange('open')} className="sort-filter-btn">
            <i class="bi bi-filter"></i> Sort
        </button>
        <button onClick={() => onFilterChange('open')} className="sort-filter-btn">
          <span className="icon">⚙</span> Filters
        </button>
      </div>
    </>
  );
};

export default SortFilterButtons;

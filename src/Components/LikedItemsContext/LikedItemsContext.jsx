import React, { createContext, useContext, useEffect, useState } from 'react';

const LikedItemsContext = createContext();

export const useLikedItems = () => useContext(LikedItemsContext);

export const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    // Get from localStorage on initial load
    const saved = localStorage.getItem('likedItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever likedItems changes
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleLike = (item) => {
    setLikedItems((prev) => {
      const exists = prev.find((i) => i.text === item.text);
      if (exists) {
        return prev.filter((i) => i.text !== item.text);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <LikedItemsContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikedItemsContext.Provider>
  );
};

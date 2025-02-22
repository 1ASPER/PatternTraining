import React, { createContext, useState } from "react";

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
    }
    setLikes(likes + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, isLiked, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};
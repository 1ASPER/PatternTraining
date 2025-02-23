import { createContext, useState, useContext } from "react";

const LikesContext = createContext();
export const useLikes = () => useContext(LikesContext);


export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes(likes + 1);


  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
};
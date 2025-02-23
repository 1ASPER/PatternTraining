import { useContext } from "react";
import { LikesContext } from "../context/LikesContext";

const useLikes = () => {
  return useContext(LikesContext);
};

export default useLikes;

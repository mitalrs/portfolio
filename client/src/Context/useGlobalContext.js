import { useContext } from "react";
import { GlobalContext } from "./index.jsx";

const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};

export default useGlobalContext;

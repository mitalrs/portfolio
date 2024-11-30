import { useContext } from "react";
import { GlobalContext } from "./index";

const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};

export default useGlobalContext;

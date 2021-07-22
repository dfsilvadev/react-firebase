import { useContext } from "react";
import { OnChangeContext } from "../contexts/OnChangeContext";

const useOnChange = () => useContext(OnChangeContext);

export default useOnChange;

import { useContext } from "react";
import ChangeContext from "../contexts/ChangeContext";

const useChangeState = () => useContext(ChangeContext);

export default useChangeState;

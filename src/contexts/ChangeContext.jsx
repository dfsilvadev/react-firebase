import { createContext } from "react";

const ChangeContext = createContext({});

export function ChangeContextProvider({ children }) {
  function changeSetState({ target }, fn) {
    fn(target.value);
  }

  return (
    <ChangeContext.Provider value={{ changeSetState }}>
      {children}
    </ChangeContext.Provider>
  );
}

export default ChangeContext;

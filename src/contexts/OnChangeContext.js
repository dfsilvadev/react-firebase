import { createContext } from "react";

const OnChangeContext = createContext({});

const OnChangeContextProvider = ({ children }) => {
  function onChange({ target }) {
    const { name, value } = target;
    return function (credentials, fn) {
      fn({
        ...credentials,
        [name]: value,
      });
    };
  }

  return (
    <OnChangeContext.Provider value={{ onChange }}>
      {children}
    </OnChangeContext.Provider>
  );
};

export { OnChangeContext, OnChangeContextProvider };

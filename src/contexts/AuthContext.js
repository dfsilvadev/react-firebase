import { createContext, useState } from "react";

import firebase from "../services/firebase";
import history from "../utils/history";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(null);

  async function signIn({ email, password }) {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => response);

      console.log(response);

      const { uid, refreshToken } = response.user;

      setUser({
        email,
        uid,
        refreshToken,
      });

      setAuthenticated(false);

      history.push("/dashboard");
    } catch (err) {
      throw Error(err.message);
    }
  }

  return (
    <AuthContext.Provider value={{ authenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

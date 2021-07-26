import { createContext, useEffect, useState } from "react";

import storage from "../utils/storage";
import firebase from "../services/firebase";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(null);

  function session(refreshToken) {
    try {
      storage.set("app.refreshToken", refreshToken);
    } catch (err) {
      throw new Error("Refresh token is not defined");
    }
  }

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

      session(refreshToken);
    } catch (err) {
      throw Error(err.message);
    } finally {
      setAuthenticated(false);
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, refreshToken, uid } = user;
        setUser({ email, refreshToken, uid });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

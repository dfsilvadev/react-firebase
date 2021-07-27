import { createContext, useEffect, useState } from "react";

import storage from "../utils/storage";
import firebase from "../services/firebase";
import { toast } from "react-toastify";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function session(refreshToken) {
    if (!!refreshToken) {
      storage.set("app.refreshToken", refreshToken);
    } else {
      storage.remove("app.refreshToken");
    }
  }

  async function signIn({ email, password }) {
    try {
      setLoading(true);
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
      setLoading(false);
      toast.error(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  async function signOut() {
    await firebase.auth().signOut();
    setUser(null);
    session();
  }

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, refreshToken, uid } = user;
        setUser({ email, refreshToken, uid });
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

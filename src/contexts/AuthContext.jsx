import { createContext } from "react";
import firebase from "../services/firebase";

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  async function signIn(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;

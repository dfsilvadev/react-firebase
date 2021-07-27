import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useOnChange from "../../hooks/useOnChange";

import ButtonDefault from "../ButtonDefault";
import InputDefault from "../InputDefault";

import * as S from "./styled";

function initialState() {
  return { email: "", password: "" };
}

const SignInForm = () => {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const { onChange } = useOnChange();

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(credentials);
    setCredentials(initialState);
    navigate("/dashboard");
  }

  return (
    <S.Form onSubmit={handleSignIn}>
      <InputDefault
        type="email"
        name="email"
        value={credentials.email}
        placeholder="seu e-mail"
        handleChange={(e) => onChange(e)(credentials, setCredentials)}
      />
      <InputDefault
        type="password"
        name="password"
        value={credentials.password}
        placeholder="sua senha"
        handleChange={(e) => onChange(e)(credentials, setCredentials)}
      />
      <ButtonDefault type="submit">Entrar</ButtonDefault>
    </S.Form>
  );
};

export default SignInForm;

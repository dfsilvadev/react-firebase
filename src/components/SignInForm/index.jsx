import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import useChangeState from "../../hooks/useChangeState";

import ButtonDefault from "../ButtonDefault";
import InputDefault from "../InputDefault";

import * as S from "./styled";

function initialState() {
  return { email: "", password: "" };
}

const SignInForm = () => {
  const [credentials, setCredentials] = useState(initialState);

  const { signIn } = useAuth();
  const { onChange } = useChangeState();

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(credentials);

    setCredentials(initialState);
  }

  return (
    <S.Form>
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
      <ButtonDefault type="submit" handleSignIn={handleSignIn}>
        Entrar
      </ButtonDefault>
    </S.Form>
  );
};

export default SignInForm;

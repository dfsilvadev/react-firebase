import { useState } from "react";

import SignInForm from "../components/SignInForm";

import * as S from "../styles/pages/home";
import SignUpForm from "../components/SignUpForm";

const SignIn = () => {
  const [hasAnAccount, setHasAnAccount] = useState(true);

  function handleSetHasAnAccount() {
    setHasAnAccount(!hasAnAccount);
  }

  return (
    <S.MainContent>
      {hasAnAccount ? (
        <S.FormContent>
          <S.Title>Sign In</S.Title>
          <SignInForm />
          <p>
            Não tem uma conta?{" "}
            <span onClick={handleSetHasAnAccount}>Clique aqui</span>
          </p>
        </S.FormContent>
      ) : (
        <S.FormContent>
          <S.Title>Cadastrar</S.Title>
          <SignUpForm />
          <p>
            Já tem uma conta?{" "}
            <span onClick={handleSetHasAnAccount}>Clique aqui</span>
          </p>
        </S.FormContent>
      )}
    </S.MainContent>
  );
};

export default SignIn;

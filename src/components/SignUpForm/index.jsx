import { useState } from "react";

import useChangeState from "../../hooks/useChangeState";

import ButtonDefault from "../ButtonDefault";
import InputDefault from "../InputDefault";

import * as S from "./styled";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { changeSetState } = useChangeState();

  return (
    <S.Form>
      <InputDefault
        type="text"
        placeholder="seu nome"
        handleChange={(e) => changeSetState(e, setName)}
      />
      <InputDefault
        type="text"
        placeholder="seu telefone"
        handleChange={(e) => changeSetState(e, setPhone)}
      />
      <InputDefault
        type="email"
        placeholder="seu e-mail"
        handleChange={(e) => changeSetState(e, setEmail)}
      />
      <InputDefault
        type="password"
        placeholder="sua senha"
        handleChange={(e) => changeSetState(e, setPassword)}
      />
      <ButtonDefault type="submit"> Cadastrar </ButtonDefault>
    </S.Form>
  );
};

export default SignUpForm;

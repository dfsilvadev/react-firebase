import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import useOnChange from "../../hooks/useOnChange";

import ButtonDefault from "../ButtonDefault";
import InputDefault from "../InputDefault";

import * as S from "./styled";

function initialState() {
  return { name: "", email: "", password: "" };
}

const SignUpForm = () => {
  const [consumer, setConsumer] = useState(initialState);

  const { signUp } = useAuth();
  const { onChange } = useOnChange();

  async function handleSignUp(e) {
    e.preventDefault();
    await signUp(consumer);
    setConsumer(initialState);
  }

  return (
    <S.Form onSubmit={handleSignUp}>
      <InputDefault
        type="text"
        name="name"
        value={consumer.name}
        placeholder="seu nome"
        handleChange={(e) => onChange(e)(consumer, setConsumer)}
      />
      <InputDefault
        type="email"
        name="email"
        value={consumer.email}
        placeholder="seu e-mail"
        handleChange={(e) => onChange(e)(consumer, setConsumer)}
      />
      <InputDefault
        type="password"
        name="password"
        value={consumer.password}
        placeholder="sua senha"
        handleChange={(e) => onChange(e)(consumer, setConsumer)}
      />
      <ButtonDefault type="submit">Cadastrar</ButtonDefault>
    </S.Form>
  );
};

export default SignUpForm;

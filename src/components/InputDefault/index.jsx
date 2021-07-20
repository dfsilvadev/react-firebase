import * as S from "./styled";

const InputDefault = ({ type, placeholder, ...props }) => {
  return <S.Input type={type} placeholder={placeholder} {...props} />;
};

export default InputDefault;

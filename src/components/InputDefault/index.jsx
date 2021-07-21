import * as S from "./styled";

const InputDefault = ({ type, handleChange, placeholder, ...props }) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      {...props}
      onChange={handleChange}
    />
  );
};

export default InputDefault;

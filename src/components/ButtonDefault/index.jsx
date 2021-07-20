import * as S from "./styled";

const ButtonDefault = ({ type, children, ...props }) => {
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  );
};

export default ButtonDefault;

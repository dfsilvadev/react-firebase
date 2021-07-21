import * as S from "./styled";

const ButtonDefault = ({ type, handleSignIn, children, ...props }) => {
  return (
    <S.Button type={type} {...props} onClick={handleSignIn}>
      {children}
    </S.Button>
  );
};

export default ButtonDefault;

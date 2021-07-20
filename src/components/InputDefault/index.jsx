import { Input } from "./styled";

const InputDefault = ({ type, placeholder, ...props }) => {
  return <Input type={type} placeholder={placeholder} {...props} />;
};

export default InputDefault;

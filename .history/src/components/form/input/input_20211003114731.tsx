import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputType } from "./constants/input.constants";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const StyledInput = styled.input`
    background: ${({ theme }) => theme.colors.lightGray};
  `;
  return <StyledInput {...props} />;
};

export default Input;

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputType } from "./constants/input.constants";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({props}) => {
  const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.gray};
  `;
  return <StyledInput ...{props} />;
};

export default Input;

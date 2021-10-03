import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../utils/units";
import { InputType } from "./constants/input.constants";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const StyledInput = styled.input`
    padding: 5px 10px;
    font-size: ${pxToRem(16)};
    background: ${({ theme }) => theme.colors.lightGray};
  `;
  return <StyledInput {...props} />;
};

export default Input;

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { pxToRem } from "src/utils/units";

type Props = HTMLButtonElement;

const Button: React.FC<Props> = (props) => {
  const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: ${pxToRem(16)};
    background: ${({ theme }) => theme.colors.blue};
    text-align: center;
  `;
  return <StyledButton {...props} />;
};

export default Button;

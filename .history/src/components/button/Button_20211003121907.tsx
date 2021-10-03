import styled from "styled-components";
import { pxToRem } from "src/utils/units";

type Props = {
  onClick(): void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: ${pxToRem(16)};
    background: ${({ theme }) => theme.colors.blue};
    text-align: center;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.85;
    }
  `;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

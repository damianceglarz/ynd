import styled from "styled-components";
import { pxToRem } from "src/utils/units";

type Props = {
  text:string,
  onClick() => void
};

const Button: React.FC<Props> = ({text, onClick}) => {
  const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: ${pxToRem(16)};
    background: ${({ theme }) => theme.colors.blue};
    text-align: center;

    &:hover{
      opacity:0.85
    }
  `;
  return <StyledButton text={text} onClick={onClick} />;
};

export default Button;

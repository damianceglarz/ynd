import styled from "styled-components";
import { pxToRem } from "src/utils/units";

const StyledLoader = styled.Loader`
  width: 100%;
  padding: 15px;
  font-size: ${pxToRem(16)};
  background: ${({ theme }) => theme.colors.blue};
  text-align: center;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

type Props = {
  onClick(): void;
};

const Loader: React.FC<Props> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
export default Loader;

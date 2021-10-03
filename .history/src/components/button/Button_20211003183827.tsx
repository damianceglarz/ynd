import styled from 'styled-components';

import { pxToRem } from 'src/utils/units';

const StyledButton = styled.button`
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

    &[disabled] {
        cursor: default;
        opacity: 0.75;
    }
`;

type Props = {
    disabled: boolean;
    onClick(): void;
};

const Button: React.FC<Props> = ({ children, disabled, onClick }) => (
    <StyledButton onClick={onClick} disabled={disabled}>
        {children}
    </StyledButton>
);
export default Button;

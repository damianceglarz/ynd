import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { pxToRem, spacing } from 'src/utils/units';

const StyledInput = styled.input`
    width: 100%;
    padding: 15px;
    font-size: ${pxToRem(16)};
    background: ${({ theme }) => theme.colors.lightGray};
    border: none;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.colors.darkGray};
    margin-bottom: ${spacing(3)};
    outline: none;
`;

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    return <StyledInput {...props} />;
};

export default Input;

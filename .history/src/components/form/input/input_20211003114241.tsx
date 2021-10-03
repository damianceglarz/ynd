import styled from "styled-components";

type Props = {
  placeholder: string;
};

const Input: React.FC<Props> = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.gray};
  `;
  return <Input />;
};

export default Input;

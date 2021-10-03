import styled from "styled-components";

const UserSearch: React.FC = () => {
  const Container = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.gray};
  `;
  return <Container />;
};

export default UserSearch;

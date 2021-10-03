import styled from "styled-components";
import UserSearchBox from "./components/UserSearchWrapper/UserSearchWrapper";

const UserSearch: React.FC = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.gray};
  `;
  return (
    <Container>
      <UserSearchBox />
    </Container>
  );
};

export default UserSearch;

import styled from "styled-components";
import UserSearchBox from "./components/UserSearchWrapper/UserSearchWrapper";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.gray};
`;

const UserSearch: React.FC = () => {
  return (
    <Container>
      <UserSearchBox />
    </Container>
  );
};

export default UserSearch;

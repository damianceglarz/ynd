import { spacing } from "src/utils/units";
import styled from "styled-components";
import UserSearchBox from "./components/UserSearchWrapper/UserSearchWrapper";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: ${spacing([4, 2])}
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

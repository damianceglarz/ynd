import styled from "styled-components";
import UserSrearchBox from "./UserSearchBox/UserSearchBox";
import UserSrearchList from "./UserSearchList/UserSearchList";

const UserSearchWrapper: React.FC = () => {
  const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <Wrapper>
      <UserSrearchBox />
      <UserSrearchList />
    </Wrapper>
  );
};

export default UserSearchWrapper;

import styled from "styled-components";

import { spacing } from "src/utils/units";

import UserSrearchBox from "./UserSearchBox/UserSearchBox";
import UserSrearchList from "./UserSearchList/UserSearchList";

const UserSearchWrapper: React.FC = () => {
  const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding: ${spacing([3, 5])};
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

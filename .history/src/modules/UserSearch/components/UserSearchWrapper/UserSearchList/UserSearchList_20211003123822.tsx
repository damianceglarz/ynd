import { spacing } from "src/utils/units";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserSearchList: React.FC = () => {
  const UserResults = styled.div`
    margin-top: ${spacing(2)};
    padding: ${spacing([1, 2])};
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <UserResults>
      <UserSearchListResult></UserSearchListResult>
    </UserResults>
  );
};

export default UserSearchList;

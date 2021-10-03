import { spacing } from "src/utils/units";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserResults = styled.div`
  margin-top: ${spacing(2)};
  background: ${({ theme }) => theme.colors.white};
`;

const UserSearchList: React.FC = () => {
  return (
    <UserResults>
      <UserSearchListResult />
    </UserResults>
  );
};

export default UserSearchList;

import Collapsible from "react-collapsible";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserSearchList: React.FC = () => {
  const UserResults = styled.div`
  margin-top: 30px,
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <UserResults>
      <UserSearchListResult></UserSearchListResult>
    </UserResults>
  );
};

export default UserSearchList;

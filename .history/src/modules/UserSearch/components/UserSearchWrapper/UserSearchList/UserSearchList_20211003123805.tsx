import Collapsible from "react-collapsible";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserSearchList: React.FC = () => {
  const UserResults = styled.div`
    margin-top: 20px;
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

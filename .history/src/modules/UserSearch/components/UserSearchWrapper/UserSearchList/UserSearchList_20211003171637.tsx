import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { spacing } from "src/utils/units";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserResults = styled.div`
  margin-top: ${spacing(2)};
  background: ${({ theme }) => theme.colors.white};
`;

const StyledInfo = styled.div`
  margin: ${spacing([3, 0])};
  text-align: center;
`; // in the real project I'd use some spinner as separated generic component

const UserSearchList: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <UserResults>
      {user.loading && <StyledInfo>Loading...</StyledInfo>}
      {user.data.length ? (
        <UserSearchListResult />
      ) : (
        <StyledInfo>No records found</StyledInfo>
      )}
    </UserResults>
  );
};

export default UserSearchList;

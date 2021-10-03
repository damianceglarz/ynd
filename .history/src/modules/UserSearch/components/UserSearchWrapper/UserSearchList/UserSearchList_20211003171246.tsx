import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { spacing } from "src/utils/units";
import styled from "styled-components";
import UserSearchListResult from "./UserSearchListResult/UserSearchListResult";

const UserResults = styled.div`
  margin-top: ${spacing(2)};
  background: ${({ theme }) => theme.colors.white};
`;

const UserSearchList: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <UserResults>
      {user.loading && "loading"}
      {user.data.length ? <UserSearchListResult /> : null}
    </UserResults>
  );
};

export default UserSearchList;

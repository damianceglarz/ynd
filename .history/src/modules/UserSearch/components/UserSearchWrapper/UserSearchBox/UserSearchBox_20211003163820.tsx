import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { getUserReposBySubstring } from "src/store/action-creators/store.action-creators";

const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;
const SearchString = styled.div`
  margin-top: ${spacing(2)};
  color: ${({ theme }) => theme.colors.graphite};
`;

const UserSearchBox: React.FC = () => {
  const asd = useSelector<RootState>((state) => state.user);
  const dispatch = useDispatch();

  console.log(asd);

  const handleInputChange = () => {
    dispatch(getUserReposBySubstring("test"));
  };

  const handleSubmitClick = () => {
    dispatch(getUserReposBySubstring("test"));
  };

  return (
    <Box>
      <Input placeholder="Enter username" onChange={handleInputChange} />
      <Button onClick={handleSubmitClick}>Search</Button>
      <SearchString>Showing users for "Exampleuser"</SearchString>
    </Box>
  );
};

export default UserSearchBox;

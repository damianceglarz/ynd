import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { userActions } from "src/store/actions/store.actions";

const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;
const SearchString = styled.div`
  margin-top: ${spacing(2)};
  color: ${({ theme }) => theme.colors.graphite};
`;

const UserSearchBox: React.FC = () => {
  const asd: TypedUseSelectorHook<RootState> = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  console.log(asd.getState());

  const handleClick = () => {
    dispatch(userActions.searchStart());
    console.log("hejo");
  };

  return (
    <Box>
      <Input placeholder="Enter username" />
      <Button onClick={handleClick}>Search</Button>
      <SearchString>Showing users for "Exampleuser"</SearchString>
    </Box>
  );
};

export default UserSearchBox;

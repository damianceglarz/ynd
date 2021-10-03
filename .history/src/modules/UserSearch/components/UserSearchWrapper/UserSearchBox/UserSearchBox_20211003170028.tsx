import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";
import { RootState } from "src/store/store";
import { getUserReposBySubstring } from "src/store/action-creators/store.action-creators";

const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;
const SearchString = styled.div`
  margin-top: ${spacing(2)};
  color: ${({ theme }) => theme.colors.graphite};
`;
const SearchError = styled.div`
  margin-bottom: ${spacing(2)};
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;

const UserSearchBox: React.FC = () => {
  const error: RootState["user"]["error"] = useSelector<RootState>(
    (state) => state.user.error
  );

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmitClick = () => {
    dispatch(getUserReposBySubstring(inputValue));
  };

  return (
    <Box>
      {error && <SearchError>{error as string}</SearchError>}
      <Input
        placeholder="Enter username"
        onChange={handleInputChange}
        value={inputValue}
      />
      <Button onClick={handleSubmitClick}>Search</Button>
      <SearchString>Showing users for "Exampleuser"</SearchString>
    </Box>
  );
};

export default UserSearchBox;

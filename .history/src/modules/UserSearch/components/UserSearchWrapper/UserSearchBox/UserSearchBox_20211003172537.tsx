import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";
import { AppDispatch, RootState } from "src/store/store";
import {
  getUserReposBySubstring,
  resetUserRepos,
} from "src/store/action-creators/store.action-creators";

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
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    dispatch(setUserSearchString({ substring: e.target.value }));
  };

  const handleSubmitClick = () => {
    dispatch(getUserReposBySubstring(user.searchString));
  };

  return (
    <Box>
      {user.error && <SearchError>{user.error}</SearchError>}
      <Input
        placeholder="Enter username"
        onChange={handleInputChange}
        value={user.searchString}
      />
      <Button onClick={handleSubmitClick}>Search</Button>
      {user.data.length ? (
        <SearchString>Showing users for "{user.searchString}"</SearchString>
      ) : null}
    </Box>
  );
};

export default UserSearchBox;

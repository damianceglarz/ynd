import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";

const UserSearchResultTile: React.FC = () => {
  const Box = styled.div`
    background: ${({ theme }) => theme.colors.white};
  `;

  return (
    <Box>
      <Input placeholder="Enter username" />
      <Button onClick={handleClick}>Search</Button>
      <SearchString>Showing users for "Exampleuser"</SearchString>
    </Box>
  );
};

export default UserSearchResultTile;

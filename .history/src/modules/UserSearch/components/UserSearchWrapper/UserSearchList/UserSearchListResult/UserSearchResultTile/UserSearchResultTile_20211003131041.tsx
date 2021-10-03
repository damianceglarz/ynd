import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";

const UserSearchResultTile: React.FC = () => {
  const StyledTile = styled.div`
    background: ${({ theme }) => theme.colors.darkGray};
  `;

  return <StyledTile>elocha</StyledTile>;
};

export default UserSearchResultTile;

import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";

const UserSearchResultTile: React.FC = () => {
  const StyledTile = styled.div`
    margin: ${spacing([1.5, 0, 0, 3])};
    background: ${({ theme }) => theme.colors.darkGray};
  `;

  return <StyledTile>elocha</StyledTile>;
};

export default UserSearchResultTile;

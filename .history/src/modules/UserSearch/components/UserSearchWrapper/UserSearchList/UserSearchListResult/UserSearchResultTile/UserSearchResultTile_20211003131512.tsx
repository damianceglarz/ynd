import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";

type Props = {
  repository: <ResultRepository></ResultRepository>;
};

const UserSearchResultTile: React.FC = ({ repository }) => {
  const StyledTile = styled.div`
    margin: ${spacing([1.5, 0, 0, 3])};
    padding: ${spacing([2, 1])};
    background: ${({ theme }) => theme.colors.darkGray};
  `;

  return <StyledTile>elocha</StyledTile>;
};

export default UserSearchResultTile;

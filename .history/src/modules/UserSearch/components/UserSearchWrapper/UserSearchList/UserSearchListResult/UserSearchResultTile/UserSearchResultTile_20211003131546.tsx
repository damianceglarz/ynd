import styled from "styled-components";

import { spacing } from "src/utils/units";

import { Button, Input } from "src/components";
import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";

type Props = {
  repository: ResultRepository;
};

const StyledTile = styled.div`
  margin: ${spacing([1.5, 0, 0, 3])};
  padding: ${spacing([2, 1])};
  background: ${({ theme }) => theme.colors.darkGray};
`;

const UserSearchResultTile: React.FC = ({ repository }) => {
  return <StyledTile></StyledTile>;
};

export default UserSearchResultTile;

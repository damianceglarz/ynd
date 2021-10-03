import styled from "styled-components";

import { spacing } from "src/utils/units";

import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";

const StyledTile = styled.div`
  margin: ${spacing([1.5, 0, 0, 3])};
  padding: ${spacing([2, 1])};
  background: ${({ theme }) => theme.colors.darkGray};
  display: flex;
`;

type Props = {
  repository: ResultRepository;
};

const UserSearchResultTile: React.FC = ({ repository }) => {
  return <StyledTile></StyledTile>;
};

export default UserSearchResultTile;

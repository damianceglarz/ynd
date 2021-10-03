import styled from "styled-components";

import { pxToRem, spacing } from "src/utils/units";

import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";

const StyledTile = styled.div`
  margin: ${spacing([1.5, 0, 0, 3])};
  padding: ${spacing([2, 1])};
  background: ${({ theme }) => theme.colors.darkGray};
  display: flex;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: ${pxToRem(24)};
`;

type Props = {
  repository: ResultRepository;
};

const UserSearchResultTile: React.FC = ({ repository }) => {
  return (
    <StyledTile>
      <div>
        <StyledTitle>{repository.title}</StyledTitle>
      </div>
    </StyledTile>
  );
};

export default UserSearchResultTile;

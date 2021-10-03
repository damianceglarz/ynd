import styled from "styled-components";

import { pxToRem, spacing } from "src/utils/units";

import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";
import Star from "src/assets/icons/star.svg";

const StyledTile = styled.div`
  margin: ${spacing([1.5, 0, 0, 3])};
  padding: ${spacing([2, 1])};
  background: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: ${pxToRem(20)};
  margin-bottom: ${spacing(0.5)};
`;

const StyledRating = styled.div`
  background: url(${Star}) no-repeat top 10px right;
  background-size: 20px;
  padding-right: 33px;
  padding-top: 3px;
  font-size: ${pxToRem(20)};
  font-weight: bold;
`;

type Props = {
  repository: ResultRepository;
};

const UserSearchResultTile: React.FC<Props> = ({ repository }) => {
  return (
    <StyledTile>
      <div>
        <StyledTitle>{repository.title}</StyledTitle>
        <span>{repository.description}</span>
      </div>
      <StyledRating>{repository.rating}</StyledRating>
    </StyledTile>
  );
};

export default UserSearchResultTile;

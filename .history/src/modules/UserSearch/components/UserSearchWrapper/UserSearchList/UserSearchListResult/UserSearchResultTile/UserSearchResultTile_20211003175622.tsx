import styled from 'styled-components';

import { pxToRem, spacing } from 'src/utils/units';

import Star from 'src/assets/icons/star.svg';
import { ResultRepository } from 'src/modules/UserSearch/types/UserSearch.types';

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
    background: url(${Star}) no-repeat top 3px right;
    background-size: 20px;
    padding-right: 30px;
    padding-top: 3px;
    min-width: 80px,
    font-size: ${pxToRem(20)};
    font-weight: bold;
`;

type Props = {
    repository: ResultRepository;
};

const UserSearchResultTile: React.FC<Props> = ({ repository }) => (
    <StyledTile>
        <div>
            <StyledTitle>{repository.name}</StyledTitle>
            <span>{repository.description}</span>
        </div>
        <StyledRating>{repository.watchers_count}</StyledRating>
    </StyledTile>
);

export default UserSearchResultTile;

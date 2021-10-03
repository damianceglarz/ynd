import styled from 'styled-components';

import { spacing } from 'src/utils/units';

import UserSrearchBox from './UserSearchBox/UserSearchBox';
import UserSrearchList from './UserSearchList/UserSearchList';

const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding: ${spacing(3)};
    background: ${({ theme }) => theme.colors.white};
`;

const UserSearchWrapper: React.FC = () => {
    return (
        <Wrapper>
            <UserSrearchBox />
            <UserSrearchList />
        </Wrapper>
    );
};

export default UserSearchWrapper;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { spacing } from 'src/utils/units';

import { Button, Input } from 'src/components';
import { getUserReposBySubstring } from 'src/store/action-creators/store.action-creators';
import userSlice from 'src/store/slices/user-search.slice';
import { AppDispatch, RootState } from 'src/store/store';

const Box = styled.div`
    background: ${({ theme }) => theme.colors.white};
`;
const SearchString = styled.div`
    margin-top: ${spacing(2)};
    color: ${({ theme }) => theme.colors.graphite};
`;
const SearchError = styled.div`
    margin-bottom: ${spacing(2)};
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
`;

const UserSearchBox: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user);
    const [savedSearchSubstring, setSavedSearchSubstring] = useState(
        user.searchString,
    );

    useEffect(() => {
        setSavedSearchSubstring(user.searchString);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.loading]);

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        dispatch(userSlice.actions.setUserSearchString({ substring: value }));
    };

    const handleSubmitClick = () => {
        if (user.searchString && user.searchString !== savedSearchSubstring) {
            dispatch(getUserReposBySubstring(user.searchString));
        }
    };

    return (
        <Box>
            {user.error && <SearchError>{user.error}</SearchError>}
            <Input
                placeholder="Enter username"
                onChange={handleInputChange}
                value={user.searchString}
            />
            <Button onClick={handleSubmitClick}>Search</Button>
            {Array.isArray(user.data) && user.data.length ? (
                <SearchString>
                    Showing users for "{savedSearchSubstring}"
                </SearchString>
            ) : null}
        </Box>
    );
};

export default UserSearchBox;

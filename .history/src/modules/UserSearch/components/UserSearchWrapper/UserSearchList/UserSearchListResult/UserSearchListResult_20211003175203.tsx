import {useState} from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import {spacing} from 'src/utils/units';
import UserSearchResultTile from './UserSearchResultTile/UserSearchResultTile';

import {useSelector} from 'react-redux';

import {RootState} from 'src/store/store';

type StyledProps = {
  isOpen: boolean;
};

const UserBox = styled.div<StyledProps>`
  position: relative;
  padding: ${spacing(2)};
  cursor: pointer;
  background: ${({theme}) => theme.colors.lightGray};

  &:after {
    content: '';
    position: absolute;
    right: 20px;
    top: ${({isOpen}) => (isOpen ? '20px' : '12px')};
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 7px;
    transition: 0.15s ease-in all;
    transform: rotate(${({isOpen}) => (isOpen ? '-135deg' : '45deg')});
    -webkit-transform: rotate(${({isOpen}) => (isOpen ? '-135deg' : '45deg')});
  }
`;

const UserSearchListResult: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      trigger={<UserBox isOpen={isOpen}>{user.data?.[0].owner.login}</UserBox>}
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      transitionTime={200}>
      {user.data?.map((repo) => (
        <UserSearchResultTile key={repo.id} repository={repo} />
      ))}
    </Collapsible>
  );
};

export default UserSearchListResult;

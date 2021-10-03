import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";

import { spacing } from "src/utils/units";
import UserSearchResultTile from "./UserSearchResultTile/UserSearchResultTile";

type StyledProps = {
  isOpen: boolean;
};

const UserBox = styled.div<StyledProps>`
  position: relative;
  padding: ${spacing(2)};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.lightGray};

  &:after {
    content: "";
    position: absolute;
    right: 20px;
    top: ${({ isOpen }) => (isOpen ? "20px" : "12px")};
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 7px;
    transition: 0.15s ease-in all;
    transform: rotate(${({ isOpen }) => (isOpen ? "-135deg" : "45deg")});
    -webkit-transform: rotate(
      ${({ isOpen }) => (isOpen ? "-135deg" : "45deg")}
    );
  }
`;

const UserSearchListResult: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      trigger={<UserBox isOpen={isOpen}>Example User 1</UserBox>}
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      transitionTime={200}
    >
      <UserSearchResultTile
        repository={{
          id: 123,
          name: "repo title",
          description: "repo desc",
          watchers_count: 14,
        }}
      />
    </Collapsible>
  );
};

export default UserSearchListResult;

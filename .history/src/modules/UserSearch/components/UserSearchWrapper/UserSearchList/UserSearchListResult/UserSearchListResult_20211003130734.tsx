import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";

import { spacing } from "src/utils/units";

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
    top: ${({ isOpen }) => (isOpen ? "12px" : "18px")};
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 7px;
    transition: 0.15s ease-in all;
    transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "-135deg")});
    -webkit-transform: rotate(
      ${({ isOpen }) => (isOpen ? "45deg" : "-135deg")}
    );
  }
`;

const UserSearchListResult: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      trigger={<UserBox isOpen={isOpen}>Example User 1</UserBox>}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
  );
};

export default UserSearchListResult;

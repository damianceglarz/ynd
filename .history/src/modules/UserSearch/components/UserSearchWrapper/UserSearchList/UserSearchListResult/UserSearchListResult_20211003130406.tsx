import { useState } from "react";
import { Collapse } from "react-collapse";

import styled from "styled-components";

import { spacing } from "src/utils/units";

const UserBox = styled.div`
  position: relative;
  padding: ${spacing(2)};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.lightGray};

  &:after {
    content: "";
    position: absolute;
    right: 20px;
    top: ${isOpen ? "12px" : "18px"};
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 7px;
    transition: 0.15s ease-in all;
    transform: rotate(${isOpen ? "45deg" : "-135deg"});
    -webkit-transform: rotate(${isOpen ? "45deg" : "-135deg"});
  }
`;

const UserSearchListResult: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <UserBox onClick={() => setIsOpen(!isOpen)}>Example User 1</UserBox>
      <Collapse isOpened={isOpen}>
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapse>
    </>
  );
};

export default UserSearchListResult;

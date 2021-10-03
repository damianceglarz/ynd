import { useState } from "react";
import { Collapse } from "react-collapse";

import styled from "styled-components";

import { spacing } from "src/utils/units";

const UserSearchListResult: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const UserBox = styled.div`
    position: relative;
    padding: ${spacing(2)};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.lightGray};
  `;

  const Icon = styled.i``;

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

import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";

import { spacing } from "src/utils/units";

const UserSearchListResult: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Test = styled.i`
  display:inline-block;
  width:30px;
  height:12px
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
  `;

  const UserBox = styled.div`
    position: relative;
    padding: ${spacing(2)};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.lightGray};
  `;

  return (
    <Collapsible trigger={((<UserBox>Example User 1</UserBox>), (<Test />))}>
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

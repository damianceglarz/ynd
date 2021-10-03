import Collapsible from "react-collapsible";
import styled from "styled-components";

import { spacing } from "src/utils/units";

const UserSearchListResult: React.FC = () => {
  const UserBox = styled.div`
    position: relative;
    padding: ${spacing(2)};
    background: ${({ theme }) => theme.colors.lightGray};

    &:after {
      content: "";
      position: absolute;
      right: 20px;
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 8px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  `;
  return (
    <Collapsible trigger={<UserBox>Example User 1</UserBox>}>
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

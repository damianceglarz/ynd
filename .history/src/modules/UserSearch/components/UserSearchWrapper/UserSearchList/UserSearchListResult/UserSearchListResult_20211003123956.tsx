import Collapsible from "react-collapsible";
import styled from "styled-components";

import { spacing } from "src/utils/units";

const UserSearchListResult: React.FC = () => {
  const UserBox = styled.div`
    padding: ${spacing([2, 3])};
    background: ${({ theme }) => theme.colors.lightGray};
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

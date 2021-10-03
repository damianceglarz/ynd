import styled from "styled-components";

const UserSearchList: React.FC = () => {
  const Box = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return;
  <Collapsible trigger="Start here">
    <p>
      This is the collapsible content. It can be any element or React component
      you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next section!
    </p>
  </Collapsible>;
};

export default UserSearchList;

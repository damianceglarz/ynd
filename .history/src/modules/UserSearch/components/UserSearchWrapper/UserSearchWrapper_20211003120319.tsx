import styled from "styled-components";
import UserSrearchBox from "./UserSearchBox/UserSearchBox";

const UserSearchWrapper: React.FC = () => {
  const Wrapper = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <Wrapper>
      <UserSrearchBox />
    </Wrapper>
  );
};

export default UserSearchWrapper;

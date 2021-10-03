import styled from "styled-components";
import UserSrearchBox from "./UserSearchBox/UserSearchBox";

const UserSearchWrapper: React.FC = () => {
  const Wrapper = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 20px 25px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <Wrapper>
      <UserSrearchBox />
    </Wrapper>
  );
};

export default UserSearchWrapper;

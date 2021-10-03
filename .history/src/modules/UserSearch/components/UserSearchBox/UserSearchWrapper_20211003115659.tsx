import styled from "styled-components";

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

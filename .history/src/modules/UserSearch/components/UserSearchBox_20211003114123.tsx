import styled from "styled-components";

const UserSearchBox: React.FC = () => {
  const Container = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return <UserSearchBox />;
};

export default UserSearchBox;

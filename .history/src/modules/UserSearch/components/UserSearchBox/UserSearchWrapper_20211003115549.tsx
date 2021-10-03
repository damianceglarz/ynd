import styled from "styled-components";

const UserSearchBox: React.FC = () => {
  const Box = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return <Box>siemano</Box>;
};

export default UserSearchBox;

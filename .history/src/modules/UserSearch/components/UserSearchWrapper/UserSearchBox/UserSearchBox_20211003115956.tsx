import styled from "styled-components";
import Input from "components";

const UserSearchBox: React.FC = () => {
  const Box = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <Box>
      <Input />
    </Box>
  );
};

export default UserSearchBox;

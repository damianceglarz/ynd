import styled from "styled-components";
import { Input } from "src/components";

const UserSearchBox: React.FC = () => {
  const Box = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
  `;
  return (
    <Box>
      <Input placeholder="Enter username" />
    </Box>
  );
};

export default UserSearchBox;

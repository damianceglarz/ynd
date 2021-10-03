import styled from "styled-components";
import { Input } from "src/components";

const UserSearchBox: React.FC = () => {
  const Box = styled.div`
    background: ${({ theme }) => theme.colors.white};
  `;
  return (
    <Box>
      <Input placeholder="Enter username" />
    </Box>
  );
};

export default UserSearchBox;

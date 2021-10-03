import styled from "styled-components";
import { Input } from "src/components";
import Button from "src/components/button/Button";

const UserSearchBox: React.FC = () => {
  const Box = styled.div`
    background: ${({ theme }) => theme.colors.white};
  `;
  const SearchString = styled.div`
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.graphite};
  `;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box>
      <Input placeholder="Enter username" />
      <Button onClick={handleClick}>Search</Button>
      <SearchString>Showing users for "Exampleuser"</SearchString>
    </Box>
  );
};

export default UserSearchBox;

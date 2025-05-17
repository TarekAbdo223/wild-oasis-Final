import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: blue;
  padding: 10px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button>Click me</Button>
        <Heading as="h2">this is our H2 heading</Heading>
        <Button>Click me</Button>
        <Heading as="h3">this is our H3 heading</Heading>
        <Button>Click me</Button>
      </StyledApp>
    </>
  );
}

export default App;

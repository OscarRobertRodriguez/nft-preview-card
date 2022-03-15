import Card from "./components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

export default App;

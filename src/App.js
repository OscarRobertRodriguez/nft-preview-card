import Card from "./components/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-rows: 1fr 30px;
  min-height: 100%;
`;

const Footer = styled.div`
  color: hsl(178, 100%, 50%);
  padding: 10px;
  text-align: center;
  line-height: 1.3;

  & a {
    color: #fff;
  }
`;

function App() {
  return (
    <Wrapper>
      <Card />
      <Footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Oscar Rodriguez</a>.
      </Footer>
    </Wrapper>
  );
}

export default App;

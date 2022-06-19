import Generator from "./components/Generator";
import Test from "./components/Test";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Test />
      </div>
    </>
  );
}

export default App;

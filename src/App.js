import Generator from "./components/Generator";
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
        <Generator />
      </div>
    </>
  );
}

export default App;

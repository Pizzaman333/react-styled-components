import { createGlobalStyle } from "styled-components";
import { Recipes } from "./components/recipes/recipes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Helvetica', Arial, sans-serif;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    min-height: 100vh;
    color: #2d3436;
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Recipes />
    </div>
  );
}

export default App;
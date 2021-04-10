import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing:border-box
  }
  body {
    margin: 0;
    padding: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
  }

  code {
    font-family: source-code-pro, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Consolas, "Courier New", monospace;
  }
`;

export default Global;

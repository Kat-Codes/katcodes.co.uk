const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Space Mono', monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
`;

export default GlobalStyle;

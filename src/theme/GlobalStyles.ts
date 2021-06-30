import { createGlobalStyle } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      foreground: string;
      background: string;
      footer: string;
    };
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Space Mono', monospace;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.foreground};
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      foreground: string;
      background: string;
      mid: string;
    };
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Space Mono', monospace;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.foreground};
    transition: all 0.3s linear;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.foreground};
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
    box-sizing: border-box;
  }

  *:focus {
    outline: 1px dashed ${props => props.theme.colors.foreground};
    opacity: 0.5;
  }
`;

export default GlobalStyle;

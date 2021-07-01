import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  colors: {
    foreground: '#333',
    background: 'white',
    mid: '#ddd',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    foreground: 'white',
    background: '#333',
    mid: '#555',
  },
};

export { lightTheme, darkTheme };
import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    foreground: '#333',
    background: 'white',
    mid: '#ddd',
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    foreground: 'white',
    background: '#333',
    mid: '#555',
  },
};

export { lightTheme, darkTheme };
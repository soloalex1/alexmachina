import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #1E1E1E;
    color: #EEE;
    font-family: 'Arial', source-sans-pro, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #1E1E1E;
    color: #EEE;
    font-family: "IBM Plex Mono", monospace;
  }
`;

export const FullBleed = css`
	width: 100%;
	grid-column: 1 / 4;
`;

export default GlobalStyle;

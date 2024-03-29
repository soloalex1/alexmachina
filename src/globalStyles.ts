import { createGlobalStyle, css } from "styled-components";

const LinkStyles = css`
	outline: none;
	padding: 2px 1px 0;
	border-bottom: 1px solid transparent;

	&:link {
		color: #eee;
	}

	&:visited {
		color: #faf20c;
	}

	&:focus,
	&:hover {
		color: #1e1e1e;
		background: #faf20c;
	}

	&:active {
		background: #265301;
		color: #cdfeaa;
	}
`;

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

		@media screen and (max-width: 480px) {
			p, a {
				font-size: 12px;
			}
		}

		a {
			${LinkStyles};
		}
  }
`;

export const FullBleed = css`
	width: 100%;
	grid-column: 1 / -1;
`;

export default GlobalStyle;

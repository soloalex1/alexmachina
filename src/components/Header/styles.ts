import styled, { css } from "styled-components";

const borderStyles = "4px solid white";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	padding: 0 24px;
	height: 60px;
	background-color: #1e1e1e;
	border: ${borderStyles};
	border-left: none;
	border-right: none;

	h1 {
		font-weight: 400;
		font-size: 24px;

		letter-spacing: 2.6px;
		cursor: default;
	}

	nav {
		height: 100%;
		max-width: 75%;
		margin: 0 16px;
		display: flex;
		align-items: center;
	}
`;

export const Navbar = styled.nav`
	height: 100%;
	max-width: 75%;
	margin: 0 16px;

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		margin: 0;
		height: 100%;

		li {
			padding: 0 16px;
			float: left;
			height: 100%;
			display: flex;
			align-items: center;
			border-left: ${borderStyles};

			&:last-of-type {
				border-right: ${borderStyles};
			}

			a {
				font-size: 16px;
				letter-spacing: 1.6px;
				text-decoration: none;
				color: inherit;
			}
		}
	}
`;

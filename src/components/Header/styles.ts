import styled, { css } from "styled-components";

import breakpoints from "../../constants/breakpoints";

export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 1fr min(120ch, 100%) 1fr;

	div {
		grid-column: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 24px;
		height: 60px;
		background-color: #1e1e1e;
		border-bottom: 4px solid white;

		h1 {
			font-size: 1rem;
			font-weight: 500;
			letter-spacing: 2.6px;

			@media (min-width: ${breakpoints.mobileXS}) {
				font-size: 1.5rem;
				font-weight: 400;
			}
		}

		nav {
			height: 100%;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: flex-end;

			> * {
				margin: 4px 0;
				font-weight: 500;
				font-size: 0.75rem;
			}
		}
	}
`;

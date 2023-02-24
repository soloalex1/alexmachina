import styled, { css } from "styled-components";
import { LinkStyles } from "../../globalStyles";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
	height: 60px;
	background-color: #1e1e1e;
	border-bottom: 4px solid white;

	h1 {
		font-weight: 400;
		font-size: 24px;
		letter-spacing: 2.6px;
	}

	aside {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		> * {
			margin: 4px 0;
		}

		a {
			${LinkStyles};
		}
	}
`;

import styled, { css } from "styled-components";

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

		@media (max-width: 768px) {
			font-size: 16px;
			font-weight: 500;
		}
	}

	aside {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-end;

		> * {
			margin: 4px 0;
			font-weight: 500;
		}
	}
`;

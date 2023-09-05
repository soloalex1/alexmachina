import styled, { css } from "styled-components";

export const ItemButton = styled.button`
	height: 40px;
	width: 40px;
	padding: 12px;
	background-color: transparent;
	color: #faf20c;
	border: none;
`;

export const ItemHeader = styled.header`
	padding: 0 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CollapsibleContainer = styled.section<{
	height: number;
}>`
	${({ height }) => css`
		overflow: hidden;

		transition: height 0.5s ease-in-out;
		height: ${height}px;

		> div {
			padding: 8px 12px;
		}
	`}
`;

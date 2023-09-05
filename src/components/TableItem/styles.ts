import styled, { css } from "styled-components";

export const ItemHeader = styled.header`
	padding: 0 8px;
	display: flex;
	justify-content: space-between;
`;

export const CollapsibleContainer = styled.section<{
	height: number;
}>`
	${({ height }) => css`
		overflow: hidden;
		border: 1px solid pink;
		transition: height 0.5s ease-in-out;
		height: ${height}px;

		> div {
			padding: 8px 12px;
		}
	`}
`;

import styled, { css } from "styled-components";

export const ItemButton = styled.button`
	height: 32px;
	width: 32px;
	background-color: transparent;
	color: #faf20c;
	border: none;
	border: 1px solid #faf20c;
	margin-left: 8px;
`;

export const ItemHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	> p {
		margin: 12px 0;
	}
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

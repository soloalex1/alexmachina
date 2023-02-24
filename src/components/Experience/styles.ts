import styled from "styled-components";

export const ListComponent = styled.ul`
	list-style-type: none;
	padding: 0;

	> * {
		border-bottom: 1px solid #eee;
		padding: 4px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-flow: row nowrap;

		&:first-of-type {
			padding: 8px 0;
		}
	}
`;

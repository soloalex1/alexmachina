import styled from "styled-components";

export const Main = styled.div`
	display: grid;
	grid-template-columns: 1fr min(120ch, 100%) 1fr;

	main {
		grid-column: 2;
		cursor: default;

		display: grid;
		grid-template-columns: 1fr 1fr 30ch;
		grid-gap: 0 16px;

		header {
			grid-column: 1 / -1;
		}
	}
`;

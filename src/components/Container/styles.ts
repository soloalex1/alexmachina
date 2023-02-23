import styled from "styled-components";

export const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr min(100ch, 100%) 1fr;

	> * {
		grid-column: 2;
	}
`;

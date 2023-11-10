import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr min(120ch, 100%) 1fr;

	> div {
		grid-column: 2;
		cursor: default;

		display: grid;
		gap: 0 24px;
		grid-template-columns: 1fr;

		@media (min-width: ${breakpoints.desktopMD}) {
			grid-template-columns: 1fr 1fr 30ch;
		}
	}
`;

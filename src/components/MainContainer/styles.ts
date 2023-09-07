import styled from "styled-components";

export const Main = styled.div`
	display: grid;
	grid-template-columns: 1fr min(120ch, 100%) 1fr;

	main {
		grid-column: 2;
		cursor: default;

		display: grid;
		grid-template-columns: 1fr 1fr 30ch;
		gap: 0 24px;

		@media screen and (max-width: 480px) {
			grid-template-columns: 1fr;
		}

		> header {
			grid-column: 1 / -1;
		}
	}
`;

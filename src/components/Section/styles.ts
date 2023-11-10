import styled from "styled-components";

import breakpoints from "../../constants/breakpoints";

export const SectionContainer = styled.section`
	padding: 0 24px;

	@media (min-width: ${breakpoints.desktopLG}) {
		padding: 0;
	}

	h2 {
		font-size: 1.25rem;
	}
`;

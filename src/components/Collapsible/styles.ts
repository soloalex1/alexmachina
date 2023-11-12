import styled, { css } from "styled-components";

export const Details = styled.details<{ description?: string; }>`
	${({ description }) => css`
	padding: 0.5rem;

	summary {
		list-style-type: ${!description && 'none'};
		pointer-events: ${description ? 'initial': 'none'};
	}

	a {
			float: right;
		}
	`}
`;

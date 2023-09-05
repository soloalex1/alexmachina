import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Table from "../components/Table";
import MainContainer from "../components/MainContainer";
import GlobalStyle from "../globalStyles";

import {
	DESCRIPTION_ITEMS,
	EXPERIENCE_ITEMS,
	PRESENT_ITEMS,
	STACK_ITEMS,
} from "../constants/lists";
import { TableItem } from "../components/TableItem";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<GlobalStyle />
			<MainContainer>
				<main>
					<Header />
					<Table title="about me" list={DESCRIPTION_ITEMS} />
					<Table title="experience" list={EXPERIENCE_ITEMS} />
					<Table title="present" list={PRESENT_ITEMS} />
					<Table title="stack" list={STACK_ITEMS} />
					<TableItem label="teste">
						<div>
							CollapsibleContainerCollapsibleContainerCollapsibleContainer
							CollapsibleContainer CollapsibleContainer
						</div>
					</TableItem>
				</main>
			</MainContainer>
		</>
	);
};

export const Head: HeadFC = () => (
	<>
		<title>Alexandre Machado</title>
		<meta charSet="UTF-8" />
		<meta name="author" content="Alexandre Machado" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Front-end Developer from Brazil." />
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link
			href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap"
			rel="stylesheet"
		/>
	</>
);

export default IndexPage;

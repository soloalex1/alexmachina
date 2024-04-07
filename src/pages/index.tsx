import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Section from "../components/Section";
import MainContainer from "../components/MainContainer";

import GlobalStyle from "../globalStyles";

import {
	DESCRIPTION_ITEMS,
	EXPERIENCE_ITEMS,
	PRESENT_ITEMS,
	PROJECT_ITEMS,
	STACK_ITEMS,
} from "../constants";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<MainContainer>
				<div>
					<Section title="about me" list={DESCRIPTION_ITEMS} />
					<Section title="experience" list={EXPERIENCE_ITEMS} />
					<Section title="stack" list={STACK_ITEMS} />
					<Section title="projects" list={PROJECT_ITEMS} />
					<Section title="present" list={PRESENT_ITEMS} />
				</div>
			</MainContainer>
		</>
	);
};

export const Head: HeadFC = () => (
	<>
		<html lang="en"></html>
		<title>Alexandre Machado</title>
		<meta charSet="UTF-8" />
		<meta name="author" content="Alexandre Machado" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Front-end Developer from Brazil." />
		<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link
			href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap"
			rel="stylesheet"
		/>
	</>
);

export default IndexPage;

import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import GlobalStyle from "../globalStyles";
import ExperienceSection from "../components/Experience";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<GlobalStyle />
			<MainContainer>
				<Header />
				<ExperienceSection />
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

import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import GlobalStyle from "../globalStyles";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Alexandre Machado</title>
		<meta charSet="UTF-8" />
		<meta name="author" content="Alexandre Machado" />
		<meta name="description" content="Front-end Developer from Brazil." />
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
			rel="stylesheet"
		/>
	</>
);

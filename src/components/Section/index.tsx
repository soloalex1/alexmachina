import React from "react";

import Collapsible from "../Collapsible";

import * as S from "./styles";

import { TableList } from "../../types";

type SectionProps = {
	title: string;
	list: TableList[];
};

const Section = ({ title, list }: SectionProps) => {
	const label = title.replace(/\s/g, "").toLowerCase()

	return (
		<S.SectionContainer aria-labelledby={label}>
			<h2 id={label}>{title}</h2>
			{list.map((entry) => (
				<Collapsible entry={entry} />
			))}
		</S.SectionContainer>
	);
};

export default Section;

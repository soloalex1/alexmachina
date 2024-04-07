import React, { useCallback, useState } from "react";

import Collapsible from "../Collapsible";

import * as S from "./styles";

import { TableList } from "../../types";

type SectionProps = {
	title: string;
	list: TableList[];
};

const Section = ({ title, list }: SectionProps) => {
	const label = title.replace(/\s/g, "").toLowerCase();

	const [widgetList, setWidgetList] = useState(list);

	const handleAccordionClick = useCallback((entry: string) => {
		console.log(entry);
		const newList = widgetList.map((item) =>
			item.label !== entry ? { ...item, expanded: false } : item
		);

		setWidgetList(newList);
	}, []);

	return (
		<S.SectionContainer aria-labelledby={label} data-accordion>
			<h2 id={label}>{title}</h2>
			{widgetList.map((entry) => (
				<Collapsible
					onOpen={handleAccordionClick}
					key={entry.label}
					entry={entry}
				/>
			))}
		</S.SectionContainer>
	);
};

export default Section;

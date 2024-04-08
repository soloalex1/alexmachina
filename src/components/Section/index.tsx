import React from "react";

import Collapsible from "../Collapsible";

import { TableList } from "../../types";

type SectionProps = {
	title: string;
	list: TableList[];
	className?: string;
};

const Section = ({ title, list, className }: SectionProps) => {
	const label = title.replace(/\s/g, "").toLowerCase();

	return (
		<section
			aria-labelledby={label}
			data-accordion
			className={`px-6 lg:px-0 ${className}`}
		>
			<h2 id={label} className="text-xl my-4 font-bold">
				{title}
			</h2>
			{list.map((entry) => (
				<Collapsible key={entry.label} entry={entry} />
			))}
		</section>
	);
};

export default Section;

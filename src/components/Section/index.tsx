import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
			<Accordion type="single" collapsible>
				{list.map(({ label, description, link, location }) =>
					description ? (
						<AccordionItem value={label}>
							<AccordionTrigger>
								<div
									role="group"
									className="py-2 flex items-center justify-between"
								>
									<h3 className="inline">{label}</h3>
									{location && link && (
										<a href={link} target="_blank" className="link">
											{location}
										</a>
									)}
								</div>
							</AccordionTrigger>
							<AccordionContent>{description}</AccordionContent>
						</AccordionItem>
					) : (
						<div
							role="group"
							className="py-2 flex items-center justify-between"
						>
							<h3 className="inline">{label}</h3>
							{location && link && (
								<a href={link} target="_blank" className="link">
									{location}
								</a>
							)}
						</div>
					)
				)}
			</Accordion>
		</section>
	);
};

export default Section;

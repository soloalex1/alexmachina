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
							<AccordionTrigger aria-label={`${label} at ${location}`}>
								<h3 className="inline mr-auto text-left">{label}</h3>
								{location && link && (
									<a
										href={link}
										target="_blank"
										className="link text-sm text-right"
									>
										{location}
									</a>
								)}
							</AccordionTrigger>
							<AccordionContent>{description}</AccordionContent>
						</AccordionItem>
					) : (
						<div
							role="group"
							className="flex items-center justify-between py-4"
						>
							<h3 className="inline mr-auto text-left text-sm">{label}</h3>
							{location && link && (
								<a
									href={link}
									target="_blank"
									className="link text-sm"
									aria-label={`${location} website`}
								>
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

import React from "react";

import List from "../List";

const ExperienceSection: React.FC = () => {
	const EXPERIENCE_ITEMS = [
		{
			role: "Junior Front-end Developer",
			company: "Agenda Edu",
			link: "https://agendaedu.com/",
		},
		{
			role: "Front-end Developer",
			company: "Statix",
			link: "https://statix.com.br/",
		},
		{
			role: "Web Developer",
			company: "Container Digital",
			link: "http://www.codijr.ufc.br/",
		},
		{
			role: "Front-end Development Intern",
			company: "LME",
			link: "https://lme.virtual.ufc.br/",
		},
	];

	return <List title="Experience" items={EXPERIENCE_ITEMS} />;
};

export default ExperienceSection;

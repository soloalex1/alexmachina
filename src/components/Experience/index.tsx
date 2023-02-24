import React from "react";

import * as S from "./styles";

import { EXPERIENCE_ITEMS } from "../../constants/lists";

const ExperienceSection: React.FC = () => {
	return (
		<section>
			<S.ListComponent>
				<li>
					<b>Experience</b>
				</li>
				{EXPERIENCE_ITEMS.map(({ role, company, link }) => {
					return (
						<li>
							<span>{role}</span>
							<a href={link} target="_blank">
								{company}
							</a>
						</li>
					);
				})}
			</S.ListComponent>
		</section>
	);
};

export default ExperienceSection;

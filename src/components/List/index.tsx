import React from "react";

import * as S from "./styles";

type ListProps = {
	title: string;
	items: { role: string; company: string; link: string }[];
};

const List: React.FC<ListProps> = ({ title, items }) => {
	return (
		<section>
			<S.ListComponent>
				<li>{title}</li>
				{items.map(({ role, company, link }) => {
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

export default List;

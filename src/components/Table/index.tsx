import React from "react";

import * as S from "./styles";

type TableProps = {
	title: string;
	list: {
		link: string;
		label: string;
		location: string;
	}[];
};

const Table: React.FC<TableProps> = ({ title, list }) => {
	return (
		<section>
			<S.ListComponent>
				<li>
					<b>{title}</b>
				</li>
				{list.map(({ label, location, link }) => {
					return (
						<li>
							<span>{label}</span>
							<a href={link} target="_blank">
								{location}
							</a>
						</li>
					);
				})}
			</S.ListComponent>
		</section>
	);
};

export default Table;

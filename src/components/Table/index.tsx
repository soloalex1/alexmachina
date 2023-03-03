import React from "react";

import * as S from "./styles";

type TableProps = {
	title: string;
	list: {
		label: string;
		link: string | null;
		location: string | null;
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
							{location && link && (
								<a href={link} target="_blank">
									{location}
								</a>
							)}
						</li>
					);
				})}
			</S.ListComponent>
		</section>
	);
};

export default Table;

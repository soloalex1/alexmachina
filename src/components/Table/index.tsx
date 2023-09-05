import React from "react";

import * as S from "./styles";
import { TableList } from "../../types";

type TableProps = {
	title: string;
	list: TableList[];
};

const Table = ({ title, list }: TableProps) => {
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

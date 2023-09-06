import React from "react";

import * as S from "./styles";
import { TableList } from "../../types";
import { Collapsible } from "../Collapsible";

type TableProps = {
	title: string;
	list: TableList[];
};

const Table = ({ title, list }: TableProps) => {
	return (
		<section>
			<h3>{title}</h3>
			{list.map((entry) => (
				<Collapsible entry={entry} />
			))}
		</section>
	);
};

export default Table;

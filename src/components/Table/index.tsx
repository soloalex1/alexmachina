import React from "react";

import Collapsible from "../Collapsible";

import { TableList } from "../../types";

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

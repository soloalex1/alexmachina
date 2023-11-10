import React from "react";

import Collapsible from "../Collapsible";

import * as S from "./styles";

import { TableList } from "../../types";

type TableProps = {
	title: string;
	list: TableList[];
};

const Table = ({ title, list }: TableProps) => {

	const label = `${title.replace(/\s/g, "").toLowerCase()}-section`;

	return (
		<S.TableContainer aria-labelledby={label}>
			<h2 id={label}>{title}</h2>
			{list.map((entry) => (
				<Collapsible entry={entry} />
			))}
		</S.TableContainer>
	);
};

export default Table;

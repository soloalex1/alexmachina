import React from "react";

import Collapsible from "../Collapsible";

import * as S from "./styles";

import { TableList } from "../../types";

type TableProps = {
	title: string;
	list: TableList[];
};

const Table = ({ title, list }: TableProps) => {
	return (
		<S.TableContainer>
			<h3>{title}</h3>
			{list.map((entry) => (
				<Collapsible entry={entry} />
			))}
		</S.TableContainer>
	);
};

export default Table;

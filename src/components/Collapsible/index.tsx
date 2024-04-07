import React from "react";

import * as S from "./styles";

import { TableList } from "../../types";

type CollapsibleProps = {
	entry: TableList;
	onOpen(entry: string): void;
};

const Collapsible = ({
	entry: { label, link, description, location, expanded },
	onOpen,
}: CollapsibleProps) => {
	return description ? (
		<S.Details open={expanded}>
			<summary onClick={() => onOpen(label)}>
				<h3>{label}</h3>
				{location && link && (
					<a href={link} target="_blank">
						{location}
					</a>
				)}
			</summary>
			<p>{description}</p>
		</S.Details>
	) : (
		<S.Description role="group">
			<h3>{label}</h3>
			{location && link && (
				<a href={link} target="_blank">
					{location}
				</a>
			)}
		</S.Description>
	);
};

export default Collapsible;

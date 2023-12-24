import React, { useState, useEffect, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import * as S from "./styles";

import { TableList } from "../../types";

type CollapsibleProps = {
	entry: TableList;
};

const Collapsible = ({
	entry: { label, link, description, location, expanded },
}: CollapsibleProps) => {

	return description ? (
		<S.Details open={expanded}>
			<summary>
				<h3>{label}</h3>
				{location && link && (
					<a href={link} target="_blank">
						{location}
					</a>
				)}
			</summary>
			<p tabIndex={0}>{description}</p>
		</S.Details>
	) : (
		<S.Description role="group" tabIndex={0}>
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

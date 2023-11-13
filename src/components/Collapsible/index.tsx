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

	return (
		<S.Details description={description} open={expanded}>
			<summary>
				{label}
				{location && link && (
					<a href={link} target="_blank">
						{location}
					</a>
				)}
			</summary>
			<p>{description}</p>
		</S.Details>
	);
};

export default Collapsible;

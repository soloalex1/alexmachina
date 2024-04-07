import React from "react";

import { TableList } from "../../types";

type CollapsibleProps = {
	entry: TableList;
};

const Collapsible = ({
	entry: { label, link, description, location, expanded },
}: CollapsibleProps) => {
	return description ? (
		<details open={expanded} className="py-2">
			<summary>
				<h3 className="inline">{label}</h3>
				{location && link && (
					<a href={link} target="_blank" className="float-right underline">
						{location}
					</a>
				)}
			</summary>
			<p>{description}</p>
		</details>
	) : (
		<div role="group" className="py-2 flex items-center justify-between">
			<h3 className="inline">{label}</h3>
			{location && link && (
				<a href={link} target="_blank" className="underline">
					{location}
				</a>
			)}
		</div>
	);
};

export default Collapsible;

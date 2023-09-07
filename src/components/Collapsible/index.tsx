import React, { useState, useEffect, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import * as S from "./styles";

import { TableList } from "../../types";

type CollapsibleProps = {
	entry: TableList;
};

const Collapsible = ({
	entry: { label, link, description, location, expanded = false },
}: CollapsibleProps) => {
	const contentRef = useRef(null);
	const [open, setOpen] = useState(expanded);
	const [height, setHeight] = useState(0);

	const toggleOpen = () => {
		setOpen(!open);
	};

	useEffect(() => {
		// @ts-ignore
		setHeight(open ? contentRef.current.getBoundingClientRect().height : 0);
	}, [open]);

	return (
		<section>
			<S.ItemHeader>
				<p>{label}</p>
				<div>
					{location && link && (
						<a href={link} target="_blank">
							{location}
						</a>
					)}
					{description && (
						<S.ItemButton onClick={toggleOpen}>
							{open ? <SlArrowUp /> : <SlArrowDown />}
						</S.ItemButton>
					)}
				</div>
			</S.ItemHeader>
			<S.CollapsibleContainer height={height}>
				<div role="content" ref={contentRef} aria-expanded={open}>
					{description}
				</div>
			</S.CollapsibleContainer>
		</section>
	);
};

export default Collapsible;

import React, { useState, useEffect, useRef } from "react";

import * as S from "./styles";

type TableItemProps = {
	label: string;
	children: JSX.Element | JSX.Element[];
};

export const TableItem = ({ label, children }: TableItemProps) => {
	const contentRef = useRef(null);
	const [open, setOpen] = useState(false);
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
				<h3>{label}</h3>
				<button onClick={toggleOpen}>{open ? "hide" : "show"} content</button>
			</S.ItemHeader>
			<S.CollapsibleContainer height={height}>
				<div role="content" ref={contentRef} aria-expanded={open}>
					{children}
				</div>
			</S.CollapsibleContainer>
		</section>
	);
};

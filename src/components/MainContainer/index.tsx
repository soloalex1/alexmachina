import React from "react";

type ContainerProps = {
	children: JSX.Element[] | JSX.Element;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<main className="grid grid-cols-main">
			<div className="col-start-2 cursor-default grid gap-6 grid-cols-1 lg:grid-cols-responsive">
				{children}
			</div>
		</main>
	);
};

export default Container;

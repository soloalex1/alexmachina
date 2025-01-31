import React from "react";

const Header: React.FC = () => (
	<header className="grid grid-cols-main">
		<div className="col-start-2 flex items-center justify-between h-16 px-6 border-b-4 border-solid border-white">
			<h1 className="font-medium text-base tracking-widest sm:text-2xl sm:font-normal">
				Alexandre Machado
			</h1>
			<nav
				aria-label="Contact"
				className="h-full flex justify-center items-end flex-nowrap flex-col"
			>
				<p className="my-1 font-medium text-xs">alexmachinadev@proton.me</p>
				<p>
					<a
						href="https://github.com/soloalex1"
						target="_blank"
						className="link text-xs font-bold underline"
						aria-label="Link to Alexandre Machado's GitHub page."
					>
						github.com/soloalex1
					</a>
				</p>
			</nav>
		</div>
	</header>
);

export default Header;

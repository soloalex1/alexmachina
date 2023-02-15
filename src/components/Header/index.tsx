import React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
	return (
		<S.HeaderContainer>
			<h1>Alexandre Machado</h1>
			<S.Navbar>
				<ul>
					<li>
						<a href="#about">About me</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#experience">Work Experience</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</S.Navbar>
		</S.HeaderContainer>
	);
};

export default Header;

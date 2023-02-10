import * as React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
	return (
		<S.HeaderContainer>
			<h1>Alexandre Machado</h1>
			<nav>
				<ul>
					<li>About me</li>
					<li>Projects</li>
					<li>Work Experience</li>
					<li>Contact</li>
				</ul>
			</nav>
		</S.HeaderContainer>
	);
};

export default Header;

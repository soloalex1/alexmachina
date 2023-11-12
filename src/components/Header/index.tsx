import React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
	return (
		<S.HeaderContainer>
			<div>
				<h1>Alexandre Machado</h1>
				<nav>
					<p>amch.smd@gmail.com</p>
					<p>
						<a href="https://github.com/soloalex1" target="_blank">
							github.com/soloalex1
						</a>
					</p>
				</nav>
			</div>
		</S.HeaderContainer>
	);
};

export default Header;

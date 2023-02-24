import React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
	return (
		<S.HeaderContainer>
			<h1>Alexandre Machado</h1>

			<aside>
				<h6>amch.smd@gmail.com</h6>
				<h6>
					<a href="https://github.com/soloalex1" target="_blank">
						github.com/soloalex1
					</a>
				</h6>
			</aside>
		</S.HeaderContainer>
	);
};

export default Header;

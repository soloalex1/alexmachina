import React from "react";

import * as S from "./styles";

type ContainerProps = {
	children: JSX.Element;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <S.Main>{children}</S.Main>;
};

export default Container;

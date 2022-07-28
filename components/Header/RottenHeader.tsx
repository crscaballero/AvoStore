import React from "react";
import { Header } from "semantic-ui-react";

import { DeadAvocado } from "@components/SVGIcons";

const RottenHeader = () => (
	<Header size="huge" as="h1">
		Avo
		<DeadAvocado size="58px" />
		Store
	</Header>
);

export default RottenHeader;

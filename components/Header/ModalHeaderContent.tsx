import React from "react";
import { Grid, Header } from "semantic-ui-react";

import { DeadAvocado } from "@components/SVGIcons";

const ModalHeaderContent = () => (
	<div className="container">
		<Grid columns={2}>
			<Grid.Row verticalAlign={"middle"}>
				<Grid.Column width="5">
					<DeadAvocado size="154px" />
				</Grid.Column>
				<Grid.Column width="11">
					<Header as="h2">You killed the avocado</Header>
					<p>You touched him so much you killed him.</p>
				</Grid.Column>
			</Grid.Row>
		</Grid>

		<style jsx>{`
			.container {
				padding: 2rem;
			}
		`}</style>
	</div>
);

export default ModalHeaderContent;

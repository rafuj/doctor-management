import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children, ...rest }) => {
	return (
		<section {...rest}>
			<Container>{children}</Container>
		</section>
	);
};

export default Section;

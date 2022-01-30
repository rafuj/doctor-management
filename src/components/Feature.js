import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../data/choose__us.js";
import FeatureItem from "./FeatureItem";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
const Feature = () => {
	return (
		<Section className="pb-120">
			<SectionHeader
				center
				title="Why Choose TM?"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="justify-content-center gy-4">
				{data.map((item, index) => (
					<Col sm={6} lg={3} key={index}>
						<FeatureItem
							title={item.title}
							text={item.text}
							icon={item.icon}
						/>
					</Col>
				))}
			</Row>
		</Section>
	);
};

export default Feature;

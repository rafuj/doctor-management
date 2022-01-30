import React from "react";
import { Col, Row } from "react-bootstrap";
import step__shapes from "../assets/images/step/step-shapes.png";
import step from "../assets/images/step/step.png";
import steps__data from "../data/steps__data.js";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import StepItem from "./StepItem";

const Steps = () => {
	return (
		<Section className="pb-120 position-relative">
			<div className="step__shapes d-none d-md-block">
				<img src={step__shapes} alt="step" />
			</div>
			<SectionHeader
				center
				title="Only Three Easy Steps to Follow"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="position-relative pt-3 gy-5 align-items-center">
				<Col md={5} lg-={4}>
					<div className="step__thumb">
						<img src={step} alt="step" />
					</div>
				</Col>
				<Col md={7} lg-={7}>
					{steps__data &&
						steps__data.map((step, index) => (
							<StepItem
								key={index}
								title={step.title}
								text={step.text}
								serial={parseInt(index) + 1}
							/>
						))}
				</Col>
			</Row>
		</Section>
	);
};

export default Steps;

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import aboutShape from "../assets/images/about/about-shape.png";
import aboutImage from "../assets/images/about/about.png";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
const About = () => {
	return (
		<Section className="pb-120 position-relative">
			<div className="about__shape">
				<img src={aboutShape} alt="about-shape" />
			</div>
			<SectionHeader
				center
				title="About Us"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="gy-4 justify-content-between flex-wrap-reverse align-items-center">
				<Col md={6} lg={5}>
					<div className="about__thumb">
						<img src={aboutImage} alt="about" />
					</div>
				</Col>
				<Col md={6}>
					<div className="about__content">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing Lorem
							Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem
							Ipsum.
						</p>
						<Button href="/" className="btn--base">
							Read More
						</Button>
					</div>
				</Col>
			</Row>
		</Section>
	);
};
export default About;

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ctaShape from "../assets/images/about/cta-shape.png";
import ctaThumb from "../assets/images/about/cta.png";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const CallToAction = () => {
	return (
		<Section className="pb-120 overflow-hidden position-relative">
			<div className="cta__shape">
				<img src={ctaShape} alt="cta-shape" />
			</div>
			<SectionHeader
				center
				title="Are You a Qualified & Expert Doctor?"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="gy-4 justify-content-between flex-wrap-reverse align-items-center position-relative">
				<Col md={6}>
					<div className="about__content">
						<h5 className="mb-3">Be a Part of TM</h5>
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
				<Col md={6} xl={5}>
					<div className="about__thumb">
						<img src={ctaThumb} alt="about" />
					</div>
				</Col>
			</Row>
		</Section>
	);
};

export default CallToAction;

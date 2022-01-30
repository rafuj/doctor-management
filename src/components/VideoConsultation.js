import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import videoConsultationShape from "../assets/images/video-consultation/video-consultation-shape.png";
import videoConsultation from "../assets/images/video-consultation/video-consultation.png";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const VideoConsultation = () => {
	return (
		<Section className="pb-120 position-relative overflow-hidden">
			<div className="video__shape d-none d-md-block">
				<img src={videoConsultationShape} alt="about-shape" />
			</div>
			<SectionHeader
				center
				title="Video Consultation from the Best doctors"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="justify-content-between flex-wrap-reverse align-items-center position-relative">
				<Col md={6}>
					<div className="about__content style__two">
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
				<Col md={6}>
					<div className="about__thumb ms-4 ps-3">
						<img src={videoConsultation} alt="about" />
					</div>
				</Col>
			</Row>
		</Section>
	);
};

export default VideoConsultation;

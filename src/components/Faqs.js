import React from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import faq__shape from "../assets/images/about/faq-shape.png";
import faqThumb from "../assets/images/about/faq.png";
import faq__data from "../data/faq__data.js";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
const Faqs = () => {
	return (
		<Section className="pb-120 overflow-hidden position-relative pb-max-md-0">
			<div className="faq__shape">
				<img src={faq__shape} alt="faq-shape" />
			</div>
			<SectionHeader
				center
				title="Frequently Asked Questions"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="gy-4 justify-content-between align-items-center position-relative">
				<Col md={5}>
					<div className="faq__thumb">
						<img src={faqThumb} alt="faq" />
					</div>
				</Col>
				<Col md={7}>
					<Accordion defaultActiveKey={0}>
						{faq__data &&
							faq__data.map((faq, index) => (
								<Accordion.Item key={index} eventKey={index}>
									<Accordion.Header>
										{faq.title} {<span className="icon"></span>}
									</Accordion.Header>
									<Accordion.Body>{faq.text}</Accordion.Body>
								</Accordion.Item>
							))}
					</Accordion>
					<div className="mt-4 text-end">
						<Button href="/" className="btn--base mt-4">
							View All FAQ's
						</Button>
					</div>
				</Col>
			</Row>
		</Section>
	);
};

export default Faqs;

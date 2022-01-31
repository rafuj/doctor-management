import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import doctor__listing from "../data/doctor__listing.js";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
const ExpertDoctors = () => {
	return (
		<Section className="pb-120">
			<SectionHeader
				center
				title="Expert & Varified Doctors"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="doctor__listing-wrapper gy-5">
				{doctor__listing &&
					doctor__listing.map((item, index) => (
						<Col sm={6} xl={3} key={index}>
							<ul className="doctor__listing">
								{item &&
									item.map((subitem, subitemIndex) => (
										<li key={subitemIndex}>
											<a href="#0">
												<FaAngleDoubleRight /> {subitem.name}
											</a>
										</li>
									))}
							</ul>
						</Col>
					))}
			</Row>
		</Section>
	);
};

export default ExpertDoctors;

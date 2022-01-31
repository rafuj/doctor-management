import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import service__image from "../assets/images/service/service.png";
import service__data from "../data/service__data";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const Services = () => {
	const [value, setValue] = useState(1);

	const { text, url } = service__data[value];

	return (
		<Section className="pb-120">
			<SectionHeader
				center
				title="Our Services"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="gy-4">
				<Col md={6}>
					<div className="service__thumb text-center">
						<img src={service__image} alt="services" />
					</div>
				</Col>
				<Col md={6}>
					<div className="about__content style__two">
						{/* <h5 className="mb-3">{name}</h5> */}
						<p>{text}</p>
						<Button href={url} className="btn--base">
							Read More
						</Button>
					</div>
					<ul className="serviceTabMenu mt-4 mt-lg-5">
						{service__data &&
							service__data.map((item, index) => (
								<li
									key={index}
									onClick={() => setValue(index)}
									className={value === index ? "active" : ""}
								>
									<FaAngleDoubleRight /> {item.name}
								</li>
							))}
					</ul>
				</Col>
			</Row>
		</Section>
	);
};

export default Services;

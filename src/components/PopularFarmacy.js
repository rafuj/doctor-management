import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import pharmacy__data from "../data/pharmacy__data.js";
import PharmacyItem from "./PharmacyItem";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const PopularFarmacy = () => {
	return (
		<Section className="pt-120 pb-120 pt-max-md-0">
			<SectionHeader
				center
				title="Order Medicine Online from Popular Pharmacy Nearby"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
			/>
			<Row className="justify-content-center g-4">
				{pharmacy__data &&
					pharmacy__data
						.map((item, index) => (
							<Col md={6} lg={4} key={index}>
								<PharmacyItem item={item} />
							</Col>
						))
						.slice(0, 3)}
			</Row>
			<div className="text-center mt-5">
				<Button href="/" className="btn--base">
					View All
				</Button>
			</div>
		</Section>
	);
};

export default PopularFarmacy;

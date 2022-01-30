import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import images from "../assets/images/banner/banner.png";
import shapes1 from "../assets/images/banner/vector1.png";
import shapes2 from "../assets/images/banner/vector2.png";
const Banner = () => {
	return (
		<section className="banner-section overflow-hidden">
			<div className="shapes1">
				<img src={shapes1} alt="banner" />
			</div>
			<div className="shapes2">
				<img src={shapes2} alt="banner" />
			</div>
			<Container>
				<Row className="align-items-center justify-content-between gy-5">
					<Col sm={12} md={6}>
						<div className="banner__content">
							<h2 className="banner__content-title">
								Protect and Take Care of Your Health
							</h2>
							<p className="banner__content-txt">
								Download Our App and feel free to take your Health
								Advice from a Specialist.
							</p>
							<Button className="btn--base">Search For a Service</Button>
						</div>
					</Col>
					<Col sm={12} md={6} lg={5}>
						<div className="banner__thumb">
							<img src={images} alt="banner" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Banner;

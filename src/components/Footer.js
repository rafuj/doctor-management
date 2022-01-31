import React from "react";
import { Container } from "react-bootstrap";
import apple__store from "../assets/images/banner/apple__store.png";
import play__store from "../assets/images/banner/play__store.png";
import footer__shape from "../assets/images/footer/footer-shape.png";
import logo from "../assets/images/logo.png";
import Address from "./Address";
import AppBtn from "./AppBtn";
import FooterLinks from "./FooterLinks";
import Social from "./Social";
const Footer = () => {
	return (
		<footer>
			<div className="footer__shape">
				<img src={footer__shape} alt="footer" />
			</div>
			<Container>
				<div className="footer__top">
					<div className="footer__top-left">
						<div className="footer__logo">
							<a href="/">
								<img src={logo} alt="logo" />
							</a>
						</div>
						<p>
							Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
							dolore smod tempor incididunt ut labore et.
						</p>
						<h6 className="footer__title">Contact Us</h6>
						<Address />
					</div>
					<div className="footer__top-right">
						<FooterLinks />
						<div className="footer__social-area">
							<div className="footer__social-area-item">
								<h6 className="footer__title mb-2">Social Icons</h6>
								<Social />
							</div>
							<div className="footer__social-area-item d-md-flex flex-wrap align-items-center">
								<h6 className="app-btn--title mb-2 mb-md-0 me-4">
									Download Our App
								</h6>
								<div className="app__btns">
									<AppBtn image={play__store} link="/" />
									<AppBtn image={apple__store} link="/" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="text-center text--base">
						&copy; Copyright TM 2021. All rights reserved. Created by
						Golden Infotech.
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

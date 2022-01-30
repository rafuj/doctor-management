import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import NavbarRightButtons from "./NavbarRightButtons";
const NavBar = () => {
	return (
		<header className="nav-header">
			<Navbar collapseOnSelect expand="xl">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} alt="logo" />
					</Navbar.Brand>
					<div className="d-flex d-xl-none align-items-center me-3 ms-auto">
						<NavbarRightButtons />
					</div>
					<Navbar.Toggle
						className="shadow-none"
						aria-controls="responsive-navbar-nav"
					/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto me-auto">
							<NavDropdown title="Doctor">
								<NavDropdown.Item href="#action/3.1">
									Doctor
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Services">
								<NavDropdown.Item href="#action/3.1">
									Doctor
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Pharmacy Owner">
								<NavDropdown.Item href="#action/3.1">
									Doctor
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#about">About Us</Nav.Link>
							<Nav.Link href="#blog">Blog</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
							<Nav.Link href="#faq">FAQ</Nav.Link>
						</Nav>
						<Nav className="align-items-center d-none d-xl-flex">
							<NavbarRightButtons />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default NavBar;

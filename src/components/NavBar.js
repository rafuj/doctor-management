import React from "react";
import {
	Button,
	Container,
	Form,
	InputGroup,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import { GrGlobe } from "react-icons/gr";
import logo from "../assets/images/logo.png";
const NavBar = () => {
	return (
		<header className="nav-header">
			<Navbar collapseOnSelect expand="xl">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} alt="logo" />
					</Navbar.Brand>
					<div className="d-flex d-xl-none align-items-center me-3 ms-auto">
						<form>
							<InputGroup className="language--group">
								<span className="icon">
									<GrGlobe />
								</span>
								<Form.Select size="sm">
									<option>En</option>
									<option>Bn</option>
									<option>In</option>
									<option>Pk</option>
									<option>Us</option>
								</Form.Select>
							</InputGroup>
						</form>
						<Button href="/" className="btn--base">
							Login
						</Button>
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
							<form>
								<InputGroup className="language--group">
									<span className="icon">
										<GrGlobe />
									</span>
									<Form.Select size="sm">
										<option>En</option>
										<option>Bn</option>
										<option>In</option>
										<option>Pk</option>
										<option>Us</option>
									</Form.Select>
								</InputGroup>
							</form>
							<Button href="/" className="btn--base">
								Login
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default NavBar;

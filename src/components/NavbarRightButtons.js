import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { GrGlobe } from "react-icons/gr";

const NavbarRightButtons = () => {
	return (
		<>
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
		</>
	);
};

export default NavbarRightButtons;

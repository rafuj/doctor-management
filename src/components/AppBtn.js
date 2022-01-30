import React from "react";

const AppBtn = ({ image, link }) => {
	return (
		<a href={link} className="app-btn">
			<img src={image} alt="app-btn" />
		</a>
	);
};

export default AppBtn;

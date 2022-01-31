import React from "react";

const AppBtn = ({ image, link, ...rest }) => {
	return (
		<a href={link} className="app-btn" {...rest}>
			<img src={image} alt="app-btn" />
		</a>
	);
};

export default AppBtn;

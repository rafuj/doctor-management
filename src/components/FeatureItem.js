import React from "react";

const FeatureItem = ({ icon, title, text }) => {
	return (
		<div className="feature__item">
			<div className="feature__item-icon">{icon}</div>
			<div className="feature__item-cont">
				<h4 className="feature__item-cont-title">{title}</h4>
				<p className="feature__item-cont-txt">{text}</p>
			</div>
		</div>
	);
};

export default FeatureItem;

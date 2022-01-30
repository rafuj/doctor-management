import React from "react";

const StepItem = ({ title, text, serial }) => {
	return (
		<div className="step__item">
			<div className="step__item-serial">{serial}</div>
			<div className="step__item-content">
				<h5 className="step__item-content-title">{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default StepItem;

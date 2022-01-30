import React from "react";

const SectionHeader = ({ title, text, center, className, ...rest }) => {
	return (
		<div
			className={`section__header ${className} ${
				center ? " text-center ms-auto me-auto" : ""
			}`}
			{...rest}
		>
			<h3 className="section__title">{title}</h3>
			<p className="sectionText">{text}</p>
		</div>
	);
};

export default SectionHeader;

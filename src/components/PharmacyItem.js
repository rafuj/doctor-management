import React from "react";
import { FiMapPin } from "react-icons/fi";
const PharmacyItem = ({ item }) => {
	return (
		<div className="pharmacy__item">
			<h6 className="pharmacy__item-title">{item.title}</h6>
			<div className="pharmacy__item-content">
				<div className="icon">
					<FiMapPin />
				</div>
				<div className="text">{item.text}</div>
			</div>
		</div>
	);
};

export default PharmacyItem;

import React from "react";
import data from "../data/social__data.js";

const Social = () => {
	return (
		<ul className="social-icons">
			{data &&
				data.map((item, index) => (
					<li key={index}>
						<a href={item.url}>{item.icon}</a>
					</li>
				))}
		</ul>
	);
};

export default Social;

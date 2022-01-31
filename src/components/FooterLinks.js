import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import footer__links from "../data/footer__links";

const FooterLinks = () => {
	return (
		<div className="footer__wrapper">
			{footer__links &&
				footer__links.map((links, index) => (
					<ul className="footer__wrapper-links" key={index}>
						{links.map((sublink, subindex) => (
							<li key={sublink.id}>
								<a href={sublink.url}>
									<FaAngleDoubleRight /> {sublink.name}
								</a>
							</li>
						))}
					</ul>
				))}
		</div>
	);
};

export default FooterLinks;

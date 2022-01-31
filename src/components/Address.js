import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoGlobeOutline } from "react-icons/io5";

const Address = () => {
	return (
		<ul className="address__bar">
			<li>
				<FaMapMarkerAlt /> House-20, Road-27, Block-A, Banani, Dhaka.
			</li>
			<li>
				<ImPhone /> +8801234567890, +88058269458
			</li>
			<li>
				<FaEnvelope />
				tmbd@mail.com
			</li>
			<li>
				<IoGlobeOutline /> tmbd.com
			</li>
		</ul>
	);
};

export default Address;

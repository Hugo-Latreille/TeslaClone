import React from "react";
import "./ButtonSecondary.css";

const ButtonSecondary = ({ name }) => {
	return (
		<div>
			<button className="buttonSecondary">{name}</button>
		</div>
	);
};

export default ButtonSecondary;

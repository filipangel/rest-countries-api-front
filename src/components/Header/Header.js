import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function Header() {
	return (
		<div className="header">
			<h1>Where in the world?</h1>
			<button className="dark-mode-btn">
				<FontAwesomeIcon icon={faMoon} className="moon-icon"></FontAwesomeIcon>
				<p>Dark Mode</p>
			</button>
		</div>
	);
}

export default Header;

import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
	return (
		<div className="search-bar">
			<FontAwesomeIcon icon={faMagnifyingGlass} className="glass-icon"></FontAwesomeIcon>
			<input type="text" placeholder="Search for a country..." onChange={() => {}} />
		</div>
	);
}

export default SearchBar;

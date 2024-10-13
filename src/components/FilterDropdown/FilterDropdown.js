import React from "react";
import "./FilterDropdown.css";

function FilterDropdown() {
	return (
		<div className="filter-dropdown-container">
			<select className="filter-dropdown" onChange={() => {}}>
				<option value="">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
}

export default FilterDropdown;

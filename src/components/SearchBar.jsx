import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<section className="w-full h-12 flex items-center bg-white dark:bg-darkBlue shadow rounded max-w-96 overflow-hidden">
			<FaSearch className="opacity-50  ml-7 mr-5 text-xl"></FaSearch>
			<input
				type="text"
				placeholder="Search for a country..."
				className="h-full w-full focus:outline-none text-xs py-1 bg-inherit"
				value={search}
				onChange={handleInputChange}
			/>
		</section>
	);
};

export default SearchBar;

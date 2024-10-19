import { useState } from "react";

import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import CardGrid from "./CardGrid";

const HomePage = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("Filter by Region");
	return (
		<main className="p-5 w-full h-full flex flex-col gap-5 bg-veryLightGray dark:bg-veryDarkBlue min-h-screen text-veryDarkBlue2 dark:text-white">
			<section className="flex flex-row flex-wrap justify-between gap-10 w-full">
				<SearchBar search={search} setSearch={setSearch}></SearchBar>
				<FilterDropdown filter={filter} setFilter={setFilter}></FilterDropdown>
			</section>
			<CardGrid search={search} filter={filter}></CardGrid>
		</main>
	);
};

export default HomePage;

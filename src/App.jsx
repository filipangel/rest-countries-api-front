import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaRegMoon, FaSearch } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function App() {
	// darkMode button logic
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	// search bar logic
	const [search, setSearch] = useState("");

	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};

	// selectFilter logic
	const [isOpen, setIsOpen] = useState(false);
	const [filter, setFilter] = useState("Filter by Region");

	const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	const handleSelect = (option) => {
		setFilter(option);
		setIsOpen(false);
	};

	// card grid logic
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const url = search ? `https://restcountries.com/v3.1/name/${search}` : "https://restcountries.com/v3.1/all";
				const res = await axios.get(url);
				const data = res.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
				setData(filter === "Filter by Region" ? data : data.filter((country) => country.region === filter));
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, [search, filter]);

	return (
		<>
			<div className="bg-veryLightGray dark:bg-veryDarkBlue min-h-screen text-veryDarkBlue2 dark:text-white">
				<header className="flex justify-between items-center py-6 px-5 w-full mb-2 bg-white dark:bg-darkBlue shadow">
					<h1 className="text-md font-bold">Where in the world?</h1>
					<button className="flex items-center font-semibold font-nunito py-1 text-sm" onClick={toggleDarkMode}>
						<FaRegMoon className="mr-3 text-md" />
						Dark Mode
					</button>
				</header>
				<main className="p-5 w-full h-full flex flex-col gap-5">
					<section className="flex flex-row flex-wrap justify-between gap-10 w-full">
						<section className="w-full h-12 flex items-center bg-white dark:bg-darkBlue shadow rounded max-w-96">
							<FaSearch className="opacity-50  ml-7 mr-5 text-xl"></FaSearch>
							<input
								type="text"
								placeholder="Search for a country..."
								className="h-full w-full focus:outline-none text-xs py-1 bg-inherit"
								value={search}
								onChange={handleInputChange}
							/>
						</section>

						<section className="">
							<div className="relative inline-block min-w-40 max-w-64 w-3/5">
								<div
									onClick={() => setIsOpen(!isOpen)}
									className="flex justify-between items-center bg-white dark:bg-darkBlue rounded px-4 py-4 cursor-pointer focus:outline-none shadow text-xs h-12"
								>
									<span>{filter}</span>
									<ChevronDownIcon className={`size-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}></ChevronDownIcon>
								</div>

								{isOpen && (
									<div className="absolute left-0 z-10 mt-1 w-full py-3 bg-white dark:bg-darkBlue rounded shadow text-xs px-2">
										{options.map((option, index) => (
											<div key={index} onClick={() => handleSelect(option)} className="px-4 py-1 cursor-pointer rounded hover:bg-darkGray">
												{option}
											</div>
										))}
									</div>
								)}
							</div>
						</section>
					</section>
					<section className="w-full min-h-full mt-5">
						{loading && <p>Loading...</p>}
						{error && <p>Error: {error.message}</p>}
						{!loading && !error && (
							<ul className="flex flex-wrap justify-center items-center gap-16">
								{data.map((country, index) => {
									return (
										<li key={index}>
											<div className="rounded shadow w-64 min-h-64 h-auto overflow-hidden bg-white dark:bg-darkBlue text-veryDarkBlue2 dark:text-white">
												<div>
													<img src={country.flags.png} alt={country.flags.alt} className="w-full h-auto m-auto" />
												</div>
												<div className="p-5">
													<h2 className="text-md font-bold mb-3">{country.name.common}</h2>
													<ul>
														<li key={`population`}>
															<p className="mt-1 text-sm">
																<span className="font-semibold">Population: </span>
																{country.population}
															</p>
														</li>
														<li key={`-region`}>
															<p className="mt-1 text-sm">
																<span className="font-semibold">Region: </span>
																{country.region}
															</p>
														</li>
														<li key={`-capital`}>
															<p className="mt-1 text-sm">
																<span className="font-semibold">Capital: </span>
																{country.capital}
															</p>
														</li>
													</ul>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						)}
					</section>
				</main>
			</div>
		</>
	);
}

export default App;

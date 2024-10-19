import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";

const CardGrid = ({ search, filter }) => {
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
		<section className="w-full min-h-full mt-5">
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{!loading && !error && (
				<ul className="flex flex-wrap justify-center items-center gap-16">
					{data.map((country, index) => (
						<li key={index}>
							<CountryCard country={country}></CountryCard>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default CardGrid;

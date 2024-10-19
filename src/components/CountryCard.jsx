import React from "react";

const CountryCard = ({ country }) => {
	return (
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
							{country.population.toLocaleString()}
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
	);
};

export default CountryCard;

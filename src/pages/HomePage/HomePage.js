import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryGrid from "../../components/CountryGrid/CountryGrid.js";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown.js";
import Header from "../../components/Header/Header.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="home-page">
			<Header></Header>
			<div className="home-page-content">
				<div className="search-and-filter">
					<SearchBar></SearchBar>
					<FilterDropdown></FilterDropdown>
				</div>

				<CountryGrid></CountryGrid>
			</div>
		</div>
	);
};

export default HomePage;

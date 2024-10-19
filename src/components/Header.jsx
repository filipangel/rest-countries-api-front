import React from "react";

import { useState, useEffect } from "react";

import { FaRegMoon } from "react-icons/fa";

const Header = () => {
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
	return (
		<header className="flex justify-between items-center py-6 px-5 w-full bg-white dark:bg-darkBlue text-veryDarkBlue2 dark:text-white shadow">
			<h1 className="text-md font-bold">Where in the world?</h1>
			<button className="flex items-center font-semibold font-nunito py-1 text-sm" onClick={toggleDarkMode}>
				<FaRegMoon className="mr-3 text-md" />
				Dark Mode
			</button>
		</header>
	);
};

export default Header;

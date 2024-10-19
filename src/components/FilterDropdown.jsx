import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FilterDropdown = ({ filter, setFilter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	const handleSelect = (option) => {
		setFilter(option);
		setIsOpen(false);
	};
	return (
		<section>
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
	);
};

export default FilterDropdown;

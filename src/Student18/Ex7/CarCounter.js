import React, { useState } from 'react';

export const CarCounter = () => {
	let [fordCount, setFordCount] = useState(0);
	let [toyotaCount, setToyotaCount] = useState(0);
	let [chevyCount, setChevyCount] = useState(0);

	let [totalCount, setTotalCount] = useState(0);

	// Set up a function that increases count every time any other button is clicked on??

	const grandTotal = () => {
		setTotalCount(fordCount + toyotaCount + chevyCount);
        console.log(totalCount)
	};

	return (
		<>
			<button
				onClick={() => {
					setFordCount(++fordCount);
                    grandTotal();
				}}
			>
				Ford
			</button>
			<button
				onClick={() => {
					setToyotaCount(++toyotaCount);
                    grandTotal();
				}}
			>
				Toyota
			</button>
			<button
				onClick={() => {
					setChevyCount(++chevyCount);
                    grandTotal();
				}}
			>
				Chevy
			</button>

			<p>
				Ford: <span>{fordCount}</span>
			</p>
			<br />
			<p>
				Toyota: <span>{toyotaCount}</span>
			</p>
			<br />
			<p>
				Chevy: <span>{chevyCount}</span>
			</p>
			<br />
			<p>
				TOTAL: <span>{totalCount}</span>
			</p>
		</>
	);
};

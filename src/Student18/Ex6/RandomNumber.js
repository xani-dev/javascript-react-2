import React, { useState } from 'react';

export const RandomNumber = () => {
	let [num, setNum] = useState(0);

	const randomize = (min, max) => {
		min = Math.ceil(0);
		max = Math.ceil(10);

		setNum(Math.floor(Math.random() * (max - min) + min));
		console.log(num);
	};

	return (
		<>
			<p>
				Random Number : <span>{num}</span>
			</p>
			<button
				onClick={() => {
					randomize();
				}}
			>
				Generate
			</button>
		</>
	);
};

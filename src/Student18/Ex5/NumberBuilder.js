import React, { useState } from 'react';

export const NumberBuilder = () => {
	let [string, setString] = useState('');
	let [count, setCount] = useState(0);

	const setBuilder = () => {
		setCount(++count);
		setString((string += count + ' '));
	};

	return (
		<>
			<button onClick={() => {setBuilder()}}>Add Number</button>
			<button
				onClick={() => {
					setString(' ');
					setCount(0);
				}}
			>
				Reset
			</button>
			<p>
				Numbers: <span>{string}</span>
			</p>
		</>
	);
};

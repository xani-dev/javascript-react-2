import React, { useState } from 'react';

export const MinMaxCounter = () => {
	const [count, setCount] = useState(0);
	const [max, setMax] = useState(0);
	const [min, setMin] = useState(0);

	const setter = (num) => {
		let sum = count+num
		setCount(sum);
		
		if (sum > max) {
			setMax(sum);
		}
		if (sum < min) {
			setMin(sum);
		}
	};

	return (
		<>
			<button onClick={() => setter(1)}>Up</button>
			<span>{count}</span>
			<button onClick={() => setter(-1)}>Down</button>
			<div>
				Min: <span>{min}</span>
			</div>
			<div>
				Max: <span>{max}</span>
			</div>
		</>
	);
};

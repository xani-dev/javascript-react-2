import React, { useState } from 'react';

export const UpDownCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<button onClick={() => setCount(count+1)}>Up</button>
			<div>
				Counter: <span>{count}</span>
			</div>
			<button onClick={() => setCount(count-1)}>Down</button>
		</>
	);
};

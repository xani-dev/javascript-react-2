import React, { useState } from 'react';

export const TenCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<button onClick={() => setCount(count < 10 ? count + 1 : 0)}>Push</button>
			<div>
				Counter: <span>{count}</span>
			</div>
		</>
	);
};

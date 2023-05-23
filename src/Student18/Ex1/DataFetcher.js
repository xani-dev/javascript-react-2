import React, { useState } from 'react';

export const DataFetcher = () => {
	const [date, setDate] = useState('Unknown');
	return (
		<>
			<button onClick={() => setDate(Date)}>Push</button>
			<div>
				UTC Date: <span>{date}</span>
			</div>
		</>
	);
};

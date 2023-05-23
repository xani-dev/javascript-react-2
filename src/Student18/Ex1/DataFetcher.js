import React, { useState } from 'react';

export const DataFetcher = () => {
	const [date, setDate] = useState('Unknown');
	return (
		<div>
			<button onClick={() => setDate(Date)}>Push</button>
			<p>
				UTC Date: <span>{date}</span>
			</p>
		</div>
	);
};

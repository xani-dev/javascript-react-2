import React, { useState } from 'react';

export const Timer = () => {
	let [buttonText, setButtonText] = useState('Stopped');
	let [startTime, setStartTime] = useState(null);
    let [totalSeconds, setTotalSeconds] = useState('')

	const onHandleTimer = () => {
		if (buttonText === 'Stopped') {
			setStartTime(new Date ());
			setButtonText('Started...');
            setTotalSeconds('')
		} else {
            let finalTime = new Date()
            setTotalSeconds((finalTime.getTime()-startTime.getTime())/1000)
            setStartTime(null)
			setButtonText('Stopped');
		}
	};

	return (
		<>
			<button onClick={() => onHandleTimer()}> {buttonText}</button>
			<p>
				Elapased Time: <span>{totalSeconds}</span>seconds
			</p>
		</>
	);
};

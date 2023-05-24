import React, { useState } from "react";

export const AddCalculator = () => {

    let [total, setTotal] = useState(0);


    let clickSum = (num) =>{
       setTotal( total += num)
    }


    return (
			<>
				<button
					onClick={() => {
						clickSum(1);
					}}
				>
					Add 1
				</button>
				<button
					onClick={() => {
						clickSum(2);
					}}
				>
					Add 2
				</button>
				<button
					onClick={() => {
						clickSum(3);
					}}
				>
					Add 3
				</button>

				<p>
					Total: <span>{total}</span>
				</p>
			</>
		);
}
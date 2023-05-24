import React, { useState } from "react";

export const Buttons = ()=> {

    const [text1, setText1] = useState('Push')
    const [text2, setText2] = useState('Push');

    const resetFn = ()=>{
        setText1('Push')
        setText2('Push')
    }
    

    return (
			<>
				<button onClick={()=>{setText1('Pushed')}}>{text1}</button>
				<br />
				<button onClick={()=>{setText2('Pushed')}}>{text2}</button>
				<br />
				<button onClick={()=>{resetFn()}}>Reset</button>
			</>
		);
}
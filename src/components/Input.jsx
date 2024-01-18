import React, { useState } from 'react';
export default function Input() {

    const [data,setData] = useState("")

    let handleInput = (e)=>{
        setData(e.target.value)
        console.log(e.target.value);
    }

   return(


    <>
    <p>Enter your name:</p>
    <input type="text" onChange={handleInput}/>
    {data? <p>Hello {data}!</p> :null}
    </>
   )
};

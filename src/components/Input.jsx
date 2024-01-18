import React, { useState } from 'react';
export default function Input() {

    const [data,setData] = useState("")

    let handleInput = (e)=>{
        if(e.target.value !==""){
            let message = `Hello ${e.target.value}!`
            setData(message)
        }else{
            setData("")
        }

    }

   return(


    <>
    <p>Enter your name:</p>
    <input type="text" onChange={handleInput}/>
    {data? <p>{data}</p> :null}
    </>
   )
};

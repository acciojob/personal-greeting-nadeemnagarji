
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [data,setData] = useState("")

  let handleInput = (e)=>{
      if(e.target.value !==""){
          let message = `Hello ${e.target.value}!`
          setData(message)
      }else{
          setData("")
      }

  }

  return (
    <div>
     <p>Enter your name:</p>
    <input type="text" onChange={handleInput}/>
    {data? <p>{data}</p> :null}

    </div>
  )
}

export default App

import React from "react";
import { useState } from "react";
import './App.css'

const Usestateexample=()=>{
    const[count, setCount]=useState(0)
    const handleClick = () => {
        setCount((count) => count + 1);
    };
    return(
        <>
        <h1>Use State Task</h1>
        <button type="button" onClick={handleClick}>count is {count}</button>
        
        </>
    )

}


export default Usestateexample
import React, { useState } from 'react'

export const JavaScript1 = ({title}) => {

    const [clr, setColor] = useState("black");
    const [btnTitle, setBtnTitle] = useState("Black")
    const handleClick = () => {
        setColor(clr === "black" ? "red" : "black");
        setBtnTitle(btnTitle === "Black" ? "Red" : "Black");
    }

    const list = ["a", "b","c","d"]; 
    const newList = [...list]
  return (
    <div>
        {title}
        
        <button 
            onClick={handleClick}>
            {btnTitle}
        </button>
        <h1 style={{color:clr}}>SAMPLE TEXT</h1>
        {newList}
    </div>
  )
}


export const JavaScript2 = () => {

    const [color, setColor] = useState("black");
    const [btnTitle, setBtnTitle] = useState("Black")
    const handleClick = () => {
        setColor(color === "black" ? "red" : "black");
        setBtnTitle(btnTitle === "Black" ? "Red" : "Black");
    }
  return (
    <div>
        <button 
            onClick={handleClick}>
            {btnTitle}
        </button>
        <h1 style={{color:color}}>SAMPLE TEXT</h1>
    </div>
  )
}
// export default JavaScript;

import { useState } from "react"

export default function counter(){
    const [count,setCount]=useState(0)
    const counter=()=>{
        (count>=0)?setCount(count+1):setCount("0")
    }

    const countersub=()=>{
        (count<=0)?setCount(0):
        setCount(count-1)
    }

    return(
        <div className="container">
            <h1 className="head">{count}</h1>
            <button className="but" onClick={counter}>+</button>
            <button  className="but1" onClick={countersub}>-</button>
        </div>
    )
}
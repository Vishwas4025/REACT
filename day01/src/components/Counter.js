import { useState } from "react"

const Counter =() =>{
    const [count, setCount] = useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }

    return(
        <>
            <h1>Counter : {count}</h1>
            <button onClick={Increment}>increment</button>
            <button onClick={Decrement}>decrement</button>
        </>
    )
}

export default Counter;
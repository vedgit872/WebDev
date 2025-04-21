import { useState, useEffect } from "react";
export default function CounterEffect() {
    const [count, setCount] = useState(0);
    useEffect(function mk() {
        console.log("change State");
    }, [count])//runs only when the count state changes
    // useEffect(function mk() {
    //     console.log("change State");
    // }, [])//does not run at all except the initial twice
    function increment() {
        setCount(c => c + 1);
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
        </>
    );
}
import React, { useState } from "react"

export default {
    title: 'useState demo'
}
function generateData() {
    console.log("generateData");
    return 32323232323
}

export const Example1 = () => {
    console.log('Example1');
    
    const [count, setCounter] = useState<number>(generateData) // значение по умолчанию return function

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)} >+</button>
            {count}
        </> 
    )
}
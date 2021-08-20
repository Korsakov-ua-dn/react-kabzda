import React, { useState } from "react"
import { useEffect } from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    console.log('SimpleExample');
    
    const [count, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log("useEffect every rerender");
        document.title = count.toString()
    })
    useEffect(() => {
        console.log("useEffect only first render");
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every count change");
        document.title = count.toString()
    }, [count])

    return (
        <>
            Hello, {count}
            <button onClick={() => setCounter(state => state + 1)} >+</button>
        </> 
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample');
    
    const [fake, setFake] = useState<number>(0)
    const [count, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log("useEffect");
        setTimeout(() => {
            console.log("setTimeout");
            document.title = count.toString()
        }, 1000)  
    }, [count])
  
    

    return (
        <>
            count- {count}, fake- {fake}
            <button onClick={() => setCounter(state => state + 1)} >count+</button>
            <button onClick={() => setFake(state => state + 1)} >fake+</button>
        </> 
    )
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample');
    
    const [count, setCounter] = useState<number>(0)

    // useEffect(() => {
    //     console.log("useEffect");
    //     setInterval(() => {
    //         console.log("setInterval");
    //         setCounter(state => state + 1) 
    //     }, 1000)  
    // }, [])
  
    

    return (
        <>
            clock- {count}
            {/* <button onClick={() => setCounter(state => state + 1)} >count+</button>
            <button onClick={() => setFake(state => state + 1)} >fake+</button> */}
        </> 
    )
}

export const ResetEffectExample = () => {
    
    const [count, setCounter] = useState<number>(0)
    console.log(`ResetEffectExample + ${count}`);

    useEffect(() => {
        console.log(`Effect + ${count}`)
        return () => {
            console.log(`Reset + ${count}`);
        }
    }, [count])
  
    

    return (
        <>
            clock- {count}
            <button onClick={() => setCounter(state => state + 1)} >count+</button>
        </> 
    )
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log(`Component render with text ${text}`);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
        
    }, [])
    return <> text- {text} </>
}
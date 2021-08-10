import React, { useState, useEffect } from "react"

const get2DigitsTime = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC = () => {
    console.log("Clock");
    
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        console.log("useEffect");
        
        const intervalID = setInterval(() => {
            console.log("setInterval");
            setDate(new Date)
        }, 1000)  

        return () => clearInterval(intervalID) // убьет интервал когда компонента умрет или перерисуется

    }, [])
  
    return <div>
        <span>{get2DigitsTime(date.getHours())}</span>
        :
        <span>{get2DigitsTime(date.getMinutes())}</span>
        :
        <span>{get2DigitsTime(date.getSeconds())}</span>
    </div>
}
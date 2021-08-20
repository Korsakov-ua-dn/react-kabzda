import React, { useState, useEffect } from "react"
import {AnalogClockSkin} from './AnalogClockSkin'
import {DigitalClockSkin} from './DigitalClockSkin'

type ClockPropsType = {
    mode?: "analog" | "digital"
}
export type ClockViewPropsType = {
    date: Date
}
export const Clock: React.FC<ClockPropsType> = (props) => {
    console.log("Clock");
    
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log("useEffect");
        
        const intervalID = setInterval(() => {
            console.log("setInterval");
            setDate(new Date())
        }, 1000)  

        return () => clearInterval(intervalID) // убьет интервал когда компонента умрет или перерисуется

    }, [])
  
    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockSkin date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockSkin date={date}/>
    }

    return <div>
        {view}
    </div>
}
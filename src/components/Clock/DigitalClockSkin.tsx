import React from 'react'
import {ClockViewPropsType} from './Clock'

const get2DigitsTime = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockSkin: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2DigitsTime(date.getHours())}</span>
        :
        <span>{get2DigitsTime(date.getMinutes())}</span>
        :
        <span>{get2DigitsTime(date.getSeconds())}</span>          
    </>
}
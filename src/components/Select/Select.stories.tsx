import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("3")
    return  <>
        <Select
            onChange={setValue}
            value={value}
            items={[
            {title: "Moskow", value: "1"},
            {title: "Kyev", value: "2"},
            {title: "Donetsk", value: "3"},
            {title: "Minsk", value: "4"}
        ]} />
    </>
}
   

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    
    return <>
        <Select
            // onChange={action("value changed")}
            onChange={setValue}
            value={value}
            items={[
            {title: "Moskow", value: "1"},
            {title: "Kyev", value: "2"},
            {title: "Donetsk", value: "3"},
            {title: "Minsk", value: "4"}
        ]} />
    </>
}
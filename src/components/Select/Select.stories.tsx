import React from 'react';
import { action } from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

export const BaseExample = () => <Select
    onChange={action("value changed")}
    value={"3"}
    items={[
    {title: "Moskow", value: "1"},
    {title: "Kyev", value: "2"},
    {title: "Donetsk", value: "3"},
    {title: "Minsk", value: "4"}
]} />
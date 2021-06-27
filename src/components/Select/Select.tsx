import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    // onChange: (value: any)=> void
    items: ItemType[]
}

export function Select (props: SelectPropsType) {
    return (
        <div>
            <div>{props.items.find(i=> i.value === props.value)}</div>
            {props.items.map((i, index)=><div key={index}>{i.title}</div>)}
        </div>
    )
}
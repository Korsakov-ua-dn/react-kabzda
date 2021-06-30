import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    items: ItemType[]
}

function Accordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickItem = (i: number) => {
        alert(i)
    }

    return (
        <>
            <AccordionTitle title={props.title}
                            onClick={() => dispatch({type: TOGGLE_COLLAPSED})} />
            {!state.collapsed && <AccordionBody onClickItem={onClickItem} items={props.items}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClickItem: (i: number) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index)=><li onClick={()=> props.onClickItem(i.value)} key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;
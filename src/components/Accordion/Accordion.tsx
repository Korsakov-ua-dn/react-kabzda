import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: ()=> void
    items: ItemType[]
}
type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}
type AccordionBodyPropsType = {
    items: ItemType[]
}

function Accordion(props: AccordionPropsType) {

    return (
        <>
            <AccordionTitle title={props.title}
                            onChange={props.onChange} />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}
function AccordionBody(props: AccordionBodyPropsType) {



    return (
        <ul>
            {props.items.map((i, index)=><li onClick={()=> alert(i.value)} key={index}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;
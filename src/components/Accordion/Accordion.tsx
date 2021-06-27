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

function Accordion(props: AccordionPropsType) {

    const onClickItem = (i: number) => {
        alert(i)
    }

    return (
        <>
            <AccordionTitle title={props.title}
                            onChange={props.onChange} />
            {!props.collapsed && <AccordionBody onClickItem={onClickItem} items={props.items}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
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
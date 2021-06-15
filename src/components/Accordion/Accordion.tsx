import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
    // collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <AccordionTitle toggle={() => setCollapsed(!collapsed)} title={props.title}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    toggle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.toggle()}>{props.title}</h3>
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;
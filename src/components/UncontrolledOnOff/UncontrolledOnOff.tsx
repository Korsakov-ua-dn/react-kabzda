import {useState} from "react";

type PropsType = {
    onChange: (on: boolean)=>void
}

function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        padding: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        marginLeft: "2px",
        padding: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

        return <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked} >Off</div>
            <div style={indicatorStyle}> </div>
        </div>
   }

export default UncontrolledOnOff
import {useState} from "react";

type PropsType = {
    // on: boolean
}

function OnOff(props: PropsType) {

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

        return <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)} >Off</div>
            <div style={indicatorStyle}></div>
        </div>
   }

export default OnOff
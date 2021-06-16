import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
  // debugger
  console.log("App rendering");

    let [collapsed, setCollapsed] = useState(true)
    let [swithOn, setSwithOn] = useState(false)

  return (
    <div>
        {/*<OnOff*/}
        {/*    on={swithOn}*/}
        {/*    onChange={(on) => setSwithOn(on)} />*/}

        <UncontrolledOnOff onChange={setSwithOn}/> {swithOn.toString()}

      <Accordion title={"--Menu--"}
                 collapsed={collapsed}
                 onChange={()=>setCollapsed(!collapsed)} />
      Article 2
      <Rating />

    </div>
  );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <h1>{props.title}</h1>
// }

export default App;

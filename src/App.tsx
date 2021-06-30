import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
// import {Select} from "./components/Select/Select";

function App() {
  console.log("App rendering");


    let [switchOn, setSwitchOn] = useState(false)

  return (
    <div className={"App"}>
      <OnOff 
        on={switchOn}
        onChange={setSwitchOn}/>

      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      <Accordion title={"--Menu--"}
                 items={[
                     {title: "Dimych", value: 1},
                     {title: "Valera", value: 2},
                     {title: "Artem", value: 3},
                     {title: "Viktor", value: 4}
                 ]} />
      <Rating />
      {/* < Select value={1}
               // onChange={()=> }
               items={[
                   {title: "Moskow", value: "1"},
                   {title: "Kyev", value: "2"},
                   {title: "Donetsk", value: "3"},
                   {title: "Minsk", value: "4"}
               ]} /> */}
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

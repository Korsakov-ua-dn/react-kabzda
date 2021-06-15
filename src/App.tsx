import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
  // debugger
  console.log("App rendering");
  return (
    <div>
        <OnOff />
        <OnOff />
        <OnOff />

      {/*<PageTitle title={"This is App Component"}/>*/}
      {/*<PageTitle title={"My friends"}/>*/}
      {/*Article 1*/}
      {/*<Rating value={3}/>*/}
      <Accordion title={"--Menu--"} />
      <Accordion title={"--Users--"} />
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

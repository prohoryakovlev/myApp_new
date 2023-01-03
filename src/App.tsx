import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncoControlledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App(props:any) {
    console.log("App render")
    return (
        <div className={"App"}>


            <OnOff />
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff /> */}
            {/*<OnOff />*/}
            {/*<OnOff />*/}

            {/*<input checked={true} value="yo" type={"password"}/>*/}

            <Accordion titleValue={"Menu"} collapsed={false} />

            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<UncontrolledAccordion  titleValue={"User"} />*/}
            <UncontrolledRating />
            <Rating value={3}/>
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: any) {
    console.log("PageTitle render")
    return (
        <h1>
            {props.title}
        </h1>
    )
}




export default App;

import React, {useState} from 'react';
import './App.css';
import Accordion, {AccordionPropsType} from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncoControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App(props: any) {
    console.log("App render")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={"App"}>

        <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff/>
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff /> */}
            {/*<OnOff />*/}
            {/*<OnOff />*/}

            {/*<input checked={true} value="yo" type={"password"}/>*/}

            {/*<Rating value={3}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*<UncontrolledAccordion  titleValue={"User"} />*/}
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

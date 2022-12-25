import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App(props:any) {
    console.log("App render")
    return (
        <div>


            <OnOff on={false}/>
            <OnOff on={true}/>
            <OnOff on={false}/>

            {/*<input checked={true} value="yo" type={"password"}/>*/}


            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion  titleValue={"User"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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

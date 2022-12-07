import React from 'react';
import './App.css';
import Accordion from "./components/Accordion"
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App render")
    return (
        <div>

            <input/>
            <input checked={true} value="yo" type={"password"}/>

            <AppTitle/>
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle render")
    return (
        <div>
            This is APP component
        </div>
    )
}




export default App;

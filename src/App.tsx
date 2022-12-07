import React from 'react';
import './App.css';
import {log} from "util";

function App() {
    console.log("App render")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
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

function Rating() {
    console.log("Rating render")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log("Star render")
    return (

        <div>Star</div>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;

import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion1(props: AccordionPropsType) {


        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }

}

function Accordion2(props: AccordionPropsType) {

    if (props.collapsed === true) {
        return <div>
            {true}  {1} {"asdasdasd"}
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }

}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle render")
    return (
        <h3>--- {props.title}--- </h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody render")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion

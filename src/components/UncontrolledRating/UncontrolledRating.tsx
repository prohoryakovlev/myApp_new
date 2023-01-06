import React, {useState} from "react";


type RatingProps = {}


export function UncontrolledRating(props: RatingProps) {
    console.log("UncontrolledRating render")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )


    type StarPropsType = {
        selected: boolean
    }

    function Star(props: StarPropsType) {
        console.log("Star render")


        return <span>
            {props.selected ? <b>star</b> : "star"}
        </span>


    }
}
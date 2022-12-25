import React from 'react';

type PropsType = {
    // on: boolean
}


const OnOff = (props: PropsType) => {

    let on = false

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green": "white",

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white": "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green": "red",

    }

    return (
        <div>
            <div style={onStyle} onClick={()=> {on = true}}>On</div>
            <div style={offStyle} onClick={()=> {on = true}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
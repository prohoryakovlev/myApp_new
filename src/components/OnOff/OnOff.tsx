import React from 'react';

type PropsType = {
    on: boolean
}



const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black"
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
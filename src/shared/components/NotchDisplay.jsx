import React from "react";

const fullNotch = require("../images/full notch.png");
const emptyNotch = require("../images/empty notch.png");
const overcharmNotch = require("../images/overcharmed notch.png");

//TODO: full notch needs to be smaller and have background glow
//TODO: find a cleaner image of overcharm and crop better - also bg glow?
//TODO: why am i not just grabbing screenshots from in the actual game

const NotchDisplay = ({ notchesArray }) => {
    return (
        <>
            {notchesArray.map((n, idx) => (
                <img key={idx} src={n} />
            ))}
        </>
    );
};

export default NotchDisplay;

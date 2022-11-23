import React from "react";

const fullNotch = require("../images/full notch.png");
const emptyNotch = require("../images/empty notch.png");
const overcharmNotch = require("../images/overcharmed notch.png");

//TODO: full notch needs to be smaller and have background glow
//TODO: find a cleaner image of overcharm and crop better - also bg glow?
//TODO: why am i not just grabbing screenshots from in the actual game

const NotchDisplay = ({ notchesArray }) => {
    let disp = [];
    for (let i = 0; i < notchesArray.length; i++) {
        if (notchesArray[i] === "O") {
            disp.push(emptyNotch);
        }
        if (notchesArray[i] === "c") {
            disp.push(fullNotch);
        }

        if (notchesArray[i] === "!") {
            disp.push(overcharmNotch);
        }
    }
    return (
        <>
            {disp.map((n, idx) => (
                <img key={idx} src={n} />
            ))}
        </>
    );
};

export default NotchDisplay;

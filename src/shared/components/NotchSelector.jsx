import React from "react";
const fullNotch = require("../images/full notch.png");

const NotchSelector = ({ notchTotal, handleToggle }) => {
    const notchesArray = Array(notchTotal).fill(fullNotch);

    function decNotches() {
        if (notchTotal > 3) {
            handleToggle(notchTotal - 1);
        }
    }
    function incNotches() {
        if (notchTotal < 11) {
            handleToggle(notchTotal + 1);
        }
    }

    return (
        <>
            <button onClick={decNotches}>-</button> Notches <button onClick={incNotches}>+</button>
            <div>
                {notchesArray.map((n, idx) => (
                    <img key={idx} src={n} />
                ))}
            </div>
        </>
    );
};

export default NotchSelector;

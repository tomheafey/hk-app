import styled from "@emotion/styled";
import React from "react";
import Button from "../styled/Button";
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
            <div>
                <Button plusMinus onClick={decNotches}>
                    –
                </Button>
                {" Notches "}
                <Button plusMinus onClick={incNotches}>
                    +
                </Button>
            </div>
            <div>
                {notchesArray.map((n, idx) => (
                    <NotchImg key={idx} src={n} />
                ))}
            </div>
        </>
    );
};

export default NotchSelector;

const NotchImg = styled("img")({
    height: "25px",
    "@media (min-width: 600px)": {
        height: "35px",
    },
    "@media (min-width: 900px)": {
        height: "45px",
    },
});

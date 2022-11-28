import styled from "@emotion/styled";
import React from "react";

const fullNotch = require("../images/full notch.png");
const emptyNotch = require("../images/empty notch.png");
const overcharmNotch = require("../images/overcharmed notch.png");

const NotchDisplay = ({ notchesArray }) => {
    return (
        <>
            {notchesArray.map((n, idx) => (
                <NotchImg key={idx} src={n} />
            ))}
        </>
    );
};

export default NotchDisplay;

const NotchImg = styled("img")((props) => ({
    height: "19px",
}));

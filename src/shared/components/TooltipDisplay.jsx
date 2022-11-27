import styled from "@emotion/styled";
import React from "react";
const fullNotch = require("../images/full notch.png");

//when hovered over, show:
//name
//notches
//flavor and/or effect text
const TooltipDisplay = ({ charm }) => {
    let notches = Array(charm.notches).fill(fullNotch);
    return (
        <TooltipContainer>
            <h2>{charm.name}</h2>
            {notches.map((n, idx) => {
                return <NotchImg key={idx} src={n} />;
            })}
            <ul>
                {charm.effectText.map((e, idx) => {
                    return <li key={idx}>{e}</li>;
                })}
            </ul>
            <br />
            <i>{charm.flavorText}</i>
        </TooltipContainer>
    );
};

export default TooltipDisplay;

const NotchImg = styled("img")((props) => ({
    height: "20px",
    marginBottom: "10px",
}));

const TooltipContainer = styled("div")((props) => ({
    //compensating for odd black space between tooltip and hovered-over element
    marginTop: "-25px",
}));

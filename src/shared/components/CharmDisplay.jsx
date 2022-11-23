import React from "react";
import { Tooltip } from "@mui/material";
import styled from "@emotion/styled";

//TODO: may need to let mobile user know to tap+hold for tooltip
//TODO: play with click vs tap settings - don't want it to disappear too quickly for mobile users
//elements have a touchstart event that may help

//TODO: splitout TooltipDisplay into its own file
//TODO: show actual images of notches instead of the number
//TODO: see how it looks with italicized flavor text

//{/* <img src={require(`../images/${charm.pngName}.png`)} /> */}
const CharmDisplay = ({ charm, handleClick }) => {
    return (
        <Tooltip enterTouchDelay={500} TransitionProps={{}} disableInteractive disableFocusListener title={<TooltipDisplay charm={charm} />}>
            <Div onTouchStart={(e) => e.stopPropagation()} onClick={(e) => handleClick(charm)}>
                <Img src={require(`../images/${charm.pngName}.png`)} />
                <br />
                <i>{charm.name}</i>
            </Div>
        </Tooltip>
    );
};

export default CharmDisplay;
// ("C:Users\tmheaDocumentsMCAhk-appsrcsharedimagesWayward_Compass.png");

//when hovered over, show:
//name
//notches
//flavor and/or effect text
const TooltipDisplay = ({ charm }) => {
    return (
        <>
            <h3>{charm.name}</h3>
            <h3>{charm.notches}</h3>
            <div>{charm.effectText}</div>
            <br />
            <br />
            <i>{charm.flavorText}</i>
        </>
    );
};

const Div = styled("span")((props) => ({
    border: "1px solid black",
    textAlign: "center",
    overflowWrap: "break-word",
    fontSize: "10px",
    height: "75px",
    width: "75px",
}));

const Img = styled("img")((props) => ({
    marginTop: "2px",
    height: "50px",
}));

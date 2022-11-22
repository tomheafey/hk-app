import React from "react";
import { Tooltip } from "@mui/material";
import styled from "@emotion/styled";

//TODO: may need to let mobile user know to tap+hold for tooltip

const CharmDisplay = ({ charm, handleClick }) => {
    return (
        <Div onClick={(e) => handleClick(charm)}>
            <Tooltip enterTouchDelay={500} disableFocusListener title={<TooltipDisplay charm={charm} />}>
                <div>
                    {charm.name}
                    <br />
                    <br />
                    {charm.notches}
                </div>
            </Tooltip>
            {/* <img src={require(`../images/${charm.pngName}.png`)} /> */}
        </Div>
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
            <h2>{charm.notches}</h2>
            <div>{charm.effectText}</div>
        </>
    );
};

const Div = styled("span")((props) => ({
    border: "1px solid black",
    textAlign: "center",
    overflowWrap: "break-word",
    fontSize: "12px",
    height: "75px",
    width: "75px",
}));

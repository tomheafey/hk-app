import React from "react";
import { Tooltip, tooltipClasses } from "@mui/material";
import styled from "@emotion/styled";
const fullNotch = require("../images/full notch.png");

//TODO: may need to let mobile user know to tap+hold for tooltip
//TODO: play with click vs tap settings - don't want it to disappear too quickly for mobile users
//elements have a touchstart event that may help

//TODO: split out TooltipDisplay into its own file
//TODO: resize notch images in tooltip

//TODO: when site bg is black, tooltip has annoying black bar at top

//{/* <img src={require(`../images/${charm.pngName}.png`)} /> */}
const CharmDisplay = ({ charm, handleClick }) => {
    return (
        <CustomTooltip enterDelay={500} enterTouchDelay={500} TransitionProps={{}} disableInteractive disableFocusListener title={<TooltipDisplay charm={charm} />}>
            <Div onTouchStart={(e) => e.stopPropagation()} onClick={(e) => handleClick(charm)}>
                <Img src={require(`../images/${charm.pngName}.png`)} />
                <br />
                <i>{charm.name}</i>
            </Div>
        </CustomTooltip>
    );
};

export default CharmDisplay;
// ("C:Users\tmheaDocumentsMCAhk-appsrcsharedimagesWayward_Compass.png");

//when hovered over, show:
//name
//notches
//flavor and/or effect text
const TooltipDisplay = ({ charm }) => {
    let notches = Array(charm.notches).fill(fullNotch);
    return (
        <>
            <h2>{charm.name}</h2>
            {notches.map((n, idx) => {
                return <img key={idx} src={n} />;
            })}
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

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
        fontSize: 11,
    },
}));

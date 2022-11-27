import React, { useMemo } from "react";
import { Tooltip, tooltipClasses } from "@mui/material";
import styled from "@emotion/styled";
const fullNotch = require("../images/full notch.png");

//TODO: play with click vs tap settings - don't want it to disappear too quickly for mobile users
//elements have a touchstart event that may help

//TODO: split out TooltipDisplay into its own file

//TODO: when site bg is black, tooltip has annoying black bar at top
//TODO: change black across site to the dark grey used for bg

//! get "inCharms" from props
//! inCharms t/f : dull it out, add glow

const CharmDisplay = ({ charm, charms, handleClick }) => {
    const isInCharms = charms ? charms.some((c) => c.id === charm.id) : false;

    return (
        <CustomTooltip enterDelay={500} enterTouchDelay={500} TransitionProps={{}} disableInteractive disableFocusListener title={<TooltipDisplay charm={charm} />}>
            <Div isInCharms={isInCharms} onTouchStart={(e) => e.stopPropagation()} onClick={(e) => handleClick(charm)}>
                <Img src={require(`../images/${charm.pngName}.png`)} />
                <br />
                <i>{charm.name}</i>
            </Div>
        </CustomTooltip>
    );
};

export default CharmDisplay;

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
                return <NotchImg key={idx} src={n} />;
            })}
            <div>{charm.effectText}</div>
            <br />
            <i>{charm.flavorText}</i>
        </>
    );
};

const Div = styled("div")((props) => ({
    // border: "1px solid black",
    textAlign: "center",
    // overflowWrap: "break-word",
    fontSize: "10px",
    height: "80px",
    width: "75px",
    opacity: props.isInCharms ? ".5" : "1",
}));

const Img = styled("img")((props) => ({
    marginTop: "2px",
    height: "50px",
}));

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "rgb(14,14,14)",
        color: "white",
        border: "1px solid white",
        fontSize: 11,
    },
}));

const NotchImg = styled("img")((props) => ({
    height: "20px",
    marginBottom: "10px",
}));

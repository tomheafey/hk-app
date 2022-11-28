import React from "react";
import { Tooltip, tooltipClasses } from "@mui/material";
import styled from "@emotion/styled";
import TooltipDisplay from "./TooltipDisplay";

const CharmDisplay = ({ charm, charms, handleClick }) => {
    //boolean used for indicating which charms are currently equipped
    const isInCharms = charms ? charms.some((c) => c.id === charm.id) : false;

    return (
        <CustomTooltip enterDelay={500} enterTouchDelay={500} TransitionProps={{}} disableInteractive disableFocusListener title={<TooltipDisplay charm={charm} />}>
            <Div isInCharms={isInCharms} onTouchStart={(e) => e.stopPropagation()} onClick={(e) => handleClick(charm)}>
                <Img isInCharms={isInCharms} src={require(`../images/${charm.pngName}.png`)} />
                <br />
                <i>{charm.name}</i>
            </Div>
        </CustomTooltip>
    );
};

export default CharmDisplay;

const Div = styled("div")((props) => ({
    textAlign: "center",
    fontSize: "10px",
    height: "80px",
    width: "75px",
    opacity: props.isInCharms ? ".5" : "1",
}));

const Img = styled("img")((props) => ({
    marginTop: "2px",
    height: "50px",
    backgroundColor: "transparent",
    filter: props.isInCharms ? "drop-shadow(0px 0px 10px white)" : "",
}));

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "rgb(14,14,14)",
        color: "white",
        //using boxShadows due to weird black artifact above the tooltip when hovering
        boxShadow: "0px -13px 0 0 rgb(14,14,14), 0px 13px 0 0 rgb(14,14,14), 0px -13px 0 1px white, 0px 13px 0 1px white",
        fontSize: 11,
    },
}));

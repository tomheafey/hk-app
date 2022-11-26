import styled from "@emotion/styled";
import React from "react";

const ToggleButtonGroup = ({ hasBetterItem, setHasBetterItem, betterItemName, betterItemVal, worseItemName, worseItemVal, betterItemPic, worseItemPic, removeCharm }) => {
    function handleClick(e) {
        if (e.currentTarget.value === betterItemVal) {
            setHasBetterItem(true);
            removeCharm(worseItemVal);
        }
        if (e.currentTarget.value === worseItemVal) {
            setHasBetterItem(false);
            removeCharm(betterItemVal);
        }
    }
    return (
        <div>
            <Button value={betterItemVal} disabled={hasBetterItem} onClick={(e) => handleClick(e)}>
                <ButtonImg src={betterItemPic} />
                <br />
                {betterItemName}
            </Button>
            <Button value={worseItemVal} disabled={!hasBetterItem} onClick={(e) => handleClick(e)}>
                <ButtonImg src={worseItemPic} />
                <br />
                {worseItemName}
            </Button>
        </div>
    );
};

export default ToggleButtonGroup;

const Button = styled("button")(() => ({
    border: "1px solid grey",
    color: "grey",
    borderRadius: "5px",
    width: "200px",
    height: "100px",
    // "&:hover": {
    //     borderColor: "blue",
    //     color: "blue",
    // },
    "&:disabled": {
        border: "3px solid white",
        color: "white",
    },
}));

const ButtonImg = styled("img")(() => ({
    height: "50%",
    marginBottom: "5px",
    // "&:disabled": {
    //     border: "3px solid white",
    //     color: "white",
    // },
}));

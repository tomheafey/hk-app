//single row of currently equipped charms
//hover gives popup with info?
//  same functionality as would be in charmselector
//click on charm
//unequip:
//replace slot with empty slot image
//remove from state

import { useCharmContext } from "../context/CharmContext";

import React from "react";
import styled from "@emotion/styled";
import { useNotchesContext } from "../context/NotchesContext";

const CurrentCharms = () => {
    const { charms, removeCharm } = useCharmContext();
    const { notchTotal, notchesArray, notchCount, isOvercharmed } = useNotchesContext();

    function handleCharmClick(charm) {
        removeCharm(charm.id);
    }

    return (
        <>
            <div>
                {isOvercharmed && <div>OVERCHARMED</div>}
                NOTCHES:
                {notchesArray.map((n, idx) => (
                    <span key={idx}>{n}</span>
                ))}
            </div>
            <CharmSelectionContainer>
                {charms.map((charm) => {
                    return (
                        <Div key={charm.id} onClick={(e) => handleCharmClick(charm)}>
                            {charm.id}
                        </Div>
                    );
                })}
            </CharmSelectionContainer>
        </>
    );
};

export default CurrentCharms;

const CharmSelectionContainer = styled("div")((props) => ({
    border: "1px solid blue",
    display: "flex",
    flexFlow: "row wrap",
}));

const Div = styled("span")((props) => ({
    border: "1px solid black",
    overflowWrap: "break-word",
    fontSize: "12px",
    height: "75px",
    width: "75px",
}));

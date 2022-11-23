//single row of currently equipped charms
//hover gives popup with info?
//  same functionality as would be in charmselector
//click on charm
//unequip:
//replace slot with empty slot image
//remove from state

//TODO: create component for displaying notches (empty, taken, overcharmed) - in game, it shows charms plus available notches after it
//TODO: split out charmselectioncontainer and styled div - these are copied over into CharmDisplay
//TODO: use CharmDisplay component here?

import { useCharmContext } from "../context/CharmContext";

import React from "react";
import styled from "@emotion/styled";
import { useNotchesContext } from "../context/NotchesContext";
import NotchDisplay from "./NotchDisplay";

const CurrentCharms = () => {
    const { charms, removeCharm } = useCharmContext();
    const { notchTotal, notchesArray, notchCount, isOvercharmed } = useNotchesContext();

    function handleCharmClick(charm) {
        if (charm.id !== "voidHeart") {
            removeCharm(charm.id);
        }
    }

    return (
        <>
            <div>
                {isOvercharmed && <div>OVERCHARMED</div>}
                NOTCHES:
                <NotchDisplay notchesArray={notchesArray} />
                {/* {notchesArray.map((n, idx) => (
                    <span key={idx}>{n}</span>
                ))} */}
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

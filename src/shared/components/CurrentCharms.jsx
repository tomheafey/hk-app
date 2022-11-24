import { useCharmContext } from "../context/CharmContext";
import React from "react";
import styled from "@emotion/styled";
import { useNotchesContext } from "../context/NotchesContext";
import NotchDisplay from "./NotchDisplay";
import CharmDisplay from "./CharmDisplay";

//TODO: create component for displaying notches (empty, taken, overcharmed) - in game, it shows charms plus available notches after it
//TODO: split out charmselectioncontainer and styled div - these are copied over into CharmDisplay
//TODO: use CharmDisplay component here?

//! max amt equippable: 12 (including void heart)
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
            <OverCharmedDiv>{isOvercharmed && "OVERCHARMED"} </OverCharmedDiv>
            <CurrentCharmsContainer>
                {charms.map((charm) => {
                    return <CharmDisplay key={charm.id} charm={charm} handleClick={handleCharmClick} />;
                    {
                        /* (
                        <Div key={charm.id} onClick={(e) => handleCharmClick(charm)}>
                            {charm.id}
                        </Div>
                    ); */
                    }
                })}
            </CurrentCharmsContainer>
            <NotchesDiv>
                <NotchesTextDiv>Notches</NotchesTextDiv>
                <NotchDisplay notchesArray={notchesArray} />
                {/* {notchesArray.map((n, idx) => (
                    <span key={idx}>{n}</span>
                ))} */}
            </NotchesDiv>
        </>
    );
};

export default CurrentCharms;

const CurrentCharmsContainer = styled("div")((props) => ({
    border: "1px solid blue",
    display: "flex",
    flexFlow: "row wrap",
}));

const OverCharmedDiv = styled("div")((props) => ({
    height: "35px",
    fontSize: "25px",
    color: "#964294",
    fontFamily: "Trajan Pro",
}));

const NotchesDiv = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
}));

const NotchesTextDiv = styled("div")((props) => ({
    marginRight: "10px",
}));

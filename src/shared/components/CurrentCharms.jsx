import { useCharmContext } from "../context/CharmContext";
import React from "react";
import styled from "@emotion/styled";
import CharmDisplay from "./CharmDisplay";
import SubheaderDiv from "../styled/SubheaderDiv";

const CurrentCharms = () => {
    const { charms, removeCharm } = useCharmContext();

    function handleCharmClick(charm) {
        if (charm.id !== "voidHeart") {
            removeCharm(charm.id);
        }
    }

    return (
        <>
            <SubheaderDiv>Equipped Charms</SubheaderDiv>

            <CurrentCharmsContainer>
                {charms.map((charm) => {
                    return <CharmDisplay key={charm.id} charm={charm} handleClick={handleCharmClick} />;
                })}
            </CurrentCharmsContainer>
        </>
    );
};

export default CurrentCharms;

const CurrentCharmsContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row wrap",
    marginBottom: "5px",
}));

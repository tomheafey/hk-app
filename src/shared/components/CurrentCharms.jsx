import { useCharmContext } from "../context/CharmContext";
import React from "react";
import styled from "@emotion/styled";
import CharmDisplay from "./CharmDisplay";

//! max amt equippable: 12 (including void heart)
const CurrentCharms = () => {
    const { charms, removeCharm } = useCharmContext();

    function handleCharmClick(charm) {
        if (charm.id !== "voidHeart") {
            removeCharm(charm.id);
        }
    }

    return (
        <>
            <Div>Equipped Charms</Div>

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
        </>
    );
};

export default CurrentCharms;

const CurrentCharmsContainer = styled("div")((props) => ({
    // border: "1px solid blue",
    display: "flex",
    flexFlow: "row wrap",
    marginBottom: "5px",
}));

const Div = styled("div")(() => ({
    fontSize: "25px",
    marginBottom: "10px",
}));

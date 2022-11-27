import React, { useContext, useEffect, useMemo, useState } from "react";
import { masterCharmList, carefreeMelody, grimmchild, voidHeart, kingsoul } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";
import CharmDisplay from "./CharmDisplay";
import { useNotchesContext } from "../context/NotchesContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";

//! using lazy method of swapping out grimm/cf & void/kingsoul

//TODO: figure out logic for dulling out charm when it's currently selected (turn down alpha or something?)
//TODO: add glowy background to selected charms (the ones that are dulled out)
//TODO (maybe): animation when equipping/unequipping charms

const CharmSelector = () => {
    const { charms, addCharm, removeCharm } = useCharmContext();
    const { notchTotal, notchCount, setNotchCount, notchesArray } = useNotchesContext();
    const { hasVoidHeart, hasCarefreeMelody } = useCharmTogglesContext();

    useEffect(() => {
        let count = 0;
        charms.forEach((c) => (count += c.notches));
        setNotchCount(count);
        return;
    }, [charms]);

    function handleCharmClick(charm) {
        //if voidheart is in the charm pool, should never be able to be added/removed
        if (charm.id !== "voidHeart") {
            if (charms.find((c) => c.id === charm.id)) {
                removeCharm(charm.id);
                return;
            }

            //if enough notches available, just add
            if (notchCount + charm.notches <= notchTotal) {
                addCharm(charm);
                return;
            }

            //if notch available do overcharm logic
            if (notchCount < notchTotal) {
                addCharm(charm);
                return;
            }

            if (notchCount >= notchTotal) {
                //! if already at max or overcharmed, do nothing
                //! possibly add indication
            }
        }
        return;
    }

    return (
        <>
            Charm Selector
            <CharmSelectionContainer>
                {masterCharmList.map((charm) => {
                    return <CharmDisplay key={charm.id} charm={charm} handleClick={handleCharmClick} />;
                })}
                {hasCarefreeMelody && (
                    <CharmDisplay charm={carefreeMelody} handleClick={handleCharmClick}>
                        {carefreeMelody.name}
                    </CharmDisplay>
                )}
                {!hasCarefreeMelody && (
                    <CharmDisplay charm={grimmchild} handleClick={handleCharmClick}>
                        {grimmchild.name}
                    </CharmDisplay>
                )}
                {hasVoidHeart && (
                    <CharmDisplay charm={voidHeart} handleClick={handleCharmClick}>
                        {voidHeart.name}
                    </CharmDisplay>
                )}
                {!hasVoidHeart && (
                    <CharmDisplay charm={kingsoul} handleClick={handleCharmClick}>
                        {kingsoul.name}
                    </CharmDisplay>
                )}
            </CharmSelectionContainer>
        </>
    );
};

export default CharmSelector;

const CharmSelectionContainer = styled("div")((props) => ({
    border: "1px solid blue",
    display: "flex",
    flexFlow: "row wrap",
}));

const Div = styled("span")((props) => ({
    border: "1px solid black",
    textAlign: "center",
    overflowWrap: "break-word",
    fontSize: "12px",
    height: "75px",
    width: "75px",
}));

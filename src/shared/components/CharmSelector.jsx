import React, { useContext, useEffect, useMemo, useState } from "react";
import { masterCharmList, carefreeMelody, grimmchild, voidHeart, kingsoul } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";
import CharmDisplay from "./CharmDisplay";
import { useNotchesContext } from "../context/NotchesContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";

//grid with all 40some charms
//hover gives popup with info?
//would need to implement something for mobile
//tap once acts as hover
//tap twice acts as click

//! using lazy method of swapping out grimm/cf & void/kingsoul

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

    // const notchCount = useMemo(() => {
    //     let count = 0;
    //     charms.forEach((c) => (count += c.notches));
    //     console.log(count);
    //     return count;
    // }, [charms]);

    function handleCharmClick(charm) {
        //TODO: logic for preventing add at notch max

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
            //TODO: figure out how to handle overcharming
            addCharm(charm);
            return;
        }

        if (notchCount >= notchTotal) {
            //! if already at max or overcharmed, do nothing
            //! possibly add indication
        }

        return;
    }

    return (
        <CharmSelectionContainer>
            {masterCharmList.map((charm) => {
                return (
                    <Div key={charm.id} onClick={(e) => handleCharmClick(charm)}>
                        {charm.name}
                        {/* <CharmDisplay charm={charm} /> */}
                        <br />
                        <br />
                        {charm.notches}
                    </Div>
                );
            })}
            {hasCarefreeMelody && <Div onClick={(e) => handleCharmClick(carefreeMelody)}>{carefreeMelody.name}</Div>}
            {!hasCarefreeMelody && <Div onClick={(e) => handleCharmClick(grimmchild)}>{grimmchild.name}</Div>}
            {hasVoidHeart && <Div onClick={(e) => handleCharmClick(voidHeart)}>{voidHeart.name}</Div>}
            {!hasVoidHeart && <Div onClick={(e) => handleCharmClick(kingsoul)}>{kingsoul.name}</Div>}
        </CharmSelectionContainer>
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

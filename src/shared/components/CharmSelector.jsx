import React, { useContext, useEffect, useMemo, useState } from "react";
import { masterCharmList, carefreeMelody, grimmchild, voidHeart, kingsoul } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";
import CharmDisplay from "./CharmDisplay";
import { useNotchesContext } from "../context/NotchesContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useResizeDetector } from "react-resize-detector";
import TitleContainer from "../styled/TitleContainer";
import TitleTextDiv from "../styled/TitleTextDiv";
import TitleImg from "../styled/TitleImg";
const topBorder = require("../images/hk top border.png");

//! using lazy method of swapping out grimm/cf & void/kingsoul
const CharmSelector = () => {
    const { charms, addCharm, removeCharm } = useCharmContext();
    const { notchTotal, notchCount, setNotchCount, notchesArray } = useNotchesContext();
    const { hasVoidHeart, hasCarefreeMelody } = useCharmTogglesContext();
    const { width, ref } = useResizeDetector();

    //automatically adds void heart if that radio is selected
    useEffect(() => {
        if (hasVoidHeart && !charms.some((c) => c.id === "voidHeart")) {
            addCharm(voidHeart);
        }
    }, [hasVoidHeart]);

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
            }
        }
        return;
    }
    return (
        <>
            <TitleContainer ref={ref}>
                <TitleTextDiv>Charm Selector</TitleTextDiv>
                <TitleImg src={topBorder} />
            </TitleContainer>

            {width < 400 && <TapHoldTextDiv>Tap+hold charms to view details</TapHoldTextDiv>}
            <CharmSelectionContainer>
                {masterCharmList.map((charm) => {
                    return <CharmDisplay key={charm.id} charm={charm} charms={charms} handleClick={handleCharmClick} />;
                })}
                {hasCarefreeMelody && (
                    <CharmDisplay charm={carefreeMelody} charms={charms} handleClick={handleCharmClick}>
                        {carefreeMelody.name}
                    </CharmDisplay>
                )}
                {!hasCarefreeMelody && (
                    <CharmDisplay charm={grimmchild} charms={charms} handleClick={handleCharmClick}>
                        {grimmchild.name}
                    </CharmDisplay>
                )}
                {hasVoidHeart && (
                    <CharmDisplay charm={voidHeart} charms={charms} handleClick={handleCharmClick}>
                        {voidHeart.name}
                    </CharmDisplay>
                )}
                {!hasVoidHeart && (
                    <CharmDisplay charm={kingsoul} charms={charms} handleClick={handleCharmClick}>
                        {kingsoul.name}
                    </CharmDisplay>
                )}
            </CharmSelectionContainer>
        </>
    );
};

export default CharmSelector;

const CharmSelectionContainer = styled("div")((props) => ({
    borderRadius: "10px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
}));

const TapHoldTextDiv = styled("div")((props) => ({
    fontSize: "10px",
    textAlign: "center",
    marginBottom: "5px",
}));

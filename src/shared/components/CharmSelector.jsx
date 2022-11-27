import React, { useContext, useEffect, useMemo, useState } from "react";
import { masterCharmList, carefreeMelody, grimmchild, voidHeart, kingsoul } from "../../charmList";
import styled from "@emotion/styled";
import { useCharmContext } from "../context/CharmContext";
import CharmDisplay from "./CharmDisplay";
import { useNotchesContext } from "../context/NotchesContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useResizeDetector } from "react-resize-detector";

const topBorder = require("../images/test.png");

//! using lazy method of swapping out grimm/cf & void/kingsoul

//TODO (maybe): animation when equipping/unequipping charms

const CharmSelector = () => {
    const { charms, addCharm, removeCharm } = useCharmContext();
    const { notchTotal, notchCount, setNotchCount, notchesArray } = useNotchesContext();
    const { hasVoidHeart, hasCarefreeMelody } = useCharmTogglesContext();
    const { width, ref } = useResizeDetector();

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
            <SectionHeaderContainer ref={ref}>
                <Div>Charm Selector</Div>
                <BorderImg src={topBorder} />
            </SectionHeaderContainer>

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
    // border: "1px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
}));

const SectionHeaderContainer = styled("div")(() => ({
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    // backgroundSize: "65%",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundImage: `url(${topBorder})`,
}));

const Div = styled("div")(() => ({
    // border: "1px solid white",

    fontSize: "15px",
    "@media (min-width: 600px)": {
        fontSize: "20px",
    },
    "@media (min-width: 900px)": {
        fontSize: "25px",
    },

    // fontSize: "3vw",
    // backgroundColor: "transparent",
}));

const BorderImg = styled("img")(() => ({
    // border: "1px solid white",
    width: "85%",
    maxWidth: "1000px",
    backgroundColor: "transparent",
    marginTop: "-5px",
    "@media (min-width: 600px)": {
        marginTop: "-10px",
    },
    "@media (min-width: 900px)": {
        marginTop: "-15px",
    },
}));

const TapHoldTextDiv = styled("div")((props) => ({
    fontSize: "10px",
    textAlign: "center",
    marginBottom: "5px",
}));

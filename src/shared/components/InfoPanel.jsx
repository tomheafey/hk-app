//this will have all of the stats and info related to current build

//definite:
//  nail damage
//  each spell's damage
//  hp (incl lifeblood addons)
//  other assorted bonuses in a section

//possibly their own thing & not in assorted:
//  move speed
//  swing speed
//  dash speed?
//  focus speed
//  nail art charge time
//  dreamnail speed

import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useCharmContext } from "../context/CharmContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useSpellsContext } from "../context/SpellsContext";
import generateHPImageArray from "../functions/calculateHP";
import calculateNailDamage from "../functions/calculateNailDamage";
import { calculateFireballDamage, calculateDiveDamage, calculateShriekDamage } from "../functions/calculateSpellDamage";
import charmSynergies from "../functions/charmSynergies";
import CharmEffectInfo from "./CharmEffectInfo";
import DamageOutputInfo from "./DamageOutputInfo";
import SynergyInfo from "./SynergyInfo";

//! max masks: 22
const InfoPanel = () => {
    const { charms } = useCharmContext();
    const { baseNailDamage } = useNailContext();
    const { baseHP } = useHPContext();
    const { baseFireballDamage, baseDiveDamage, baseShriekDamage, hasShadeSoul, hasDescendingDark, hasAbyssShriek } = useSpellsContext();

    const synergies = useMemo(() => {
        return charmSynergies(charms);
    }, [charms]);

    const currentNailDamage = useMemo(() => {
        return calculateNailDamage(baseNailDamage, charms);
    }, [charms, baseNailDamage]);

    const currentFireballDamage = useMemo(() => {
        return calculateFireballDamage(baseFireballDamage, charms);
    }, [charms, baseFireballDamage]);

    const currentDiveDamage = useMemo(() => {
        return calculateDiveDamage(baseDiveDamage, charms, hasDescendingDark);
    }, [charms, baseDiveDamage]);

    const currentShriekDamage = useMemo(() => {
        return calculateShriekDamage(baseShriekDamage, charms, hasAbyssShriek);
    }, [charms, baseShriekDamage]);

    return (
        <>
            <MaskInfoContainer>
                <HPTextDiv>Masks</HPTextDiv>
                <MasksContainer>
                    {generateHPImageArray(baseHP, charms).map((m, idx) => (
                        <MaskImg key={idx} src={m} />
                    ))}
                </MasksContainer>
            </MaskInfoContainer>

            <DamageOutputInfo
                hasShadeSoul={hasShadeSoul}
                hasDescendingDark={hasDescendingDark}
                hasAbyssShriek={hasAbyssShriek}
                baseNailDamage={baseNailDamage}
                baseFireballDamage={baseFireballDamage}
                baseDiveDamage={baseDiveDamage}
                baseShriekDamage={baseShriekDamage}
                currentNailDamage={currentNailDamage}
                currentFireballDamage={currentFireballDamage}
                currentDiveDamage={currentDiveDamage}
                currentShriekDamage={currentShriekDamage}
                charms={charms}
            />

            <CharmEffectInfo charms={charms} />

            <SynergyInfo synergies={synergies} />
        </>
    );
};

export default InfoPanel;

const IncreaseSpan = styled("span")((props) => ({
    color: "#17FA40",
}));

const UL = styled("ul")((props) => ({
    margin: "0",
    listStyle: "outside",
}));

const LI = styled("li")((props) => ({
    fontSize: "12px",
}));

const DamageInfoContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row nowrap",
    // marginLeft: "25px",
}));

const DamageLabelsContainer = styled("div")((props) => ({
    flexBasis: "200px",
}));

const MaskInfoContainer = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
}));

const MasksContainer = styled("div")((props) => ({
    display: "flex",
    flexFlow: "row wrap",
    // alignItems: "center",
}));

const HPTextDiv = styled("div")((props) => ({
    marginRight: "10px",
}));

const MaskImg = styled("img")((props) => ({
    height: "30px",
    marginLeft: "2px",
}));

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
import SynergyInfo from "./SynergyInfo";

const testCharm = {
    id: "shamanStone",
    name: "Shaman Stone",
    pngName: "Shaman_Stone",
    notches: 3,
    flavorText: "Said to contain the knowledge of past generations of shaman. Increases the power of spells, dealing more damage to foes.",
    effectText: [
        "Increases Vengeful Spirit/Shade Soul damage by 33%",
        "Increases Desolate Dive damage by 51% and Descending Dark damage by 47%",
        "Increases Howling Wraiths/Abyss Shriek damage by 50%",
        "Increases the size of Vengeful Spirit/Shade Soul",
    ],
};

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

            <DamageInfoContainer>
                <DamageLabelsContainer>
                    <div>Nail Damage:</div>
                    <div>{hasShadeSoul ? "Shade Soul" : "Vengeful Spirit"} Damage:</div>
                    <div>{hasDescendingDark ? "Descending Dark" : "Desolate Dive"} Damage:</div>
                    <div>{hasAbyssShriek ? "Abyss Shriek" : "Howling Wraiths"} Damage:</div>
                </DamageLabelsContainer>
                <div>
                    {baseNailDamage < currentNailDamage && (
                        <b>
                            <IncreaseSpan>{currentNailDamage}</IncreaseSpan>
                        </b>
                    )}
                    {!(baseNailDamage < currentNailDamage) && baseNailDamage}
                    <div>{calculateFireballDamage(baseFireballDamage, charms)}</div>
                    <div>{calculateDiveDamage(baseDiveDamage, charms, hasDescendingDark)}</div>
                    <div>{calculateShriekDamage(baseShriekDamage, charms, hasAbyssShriek)}</div>
                </div>
            </DamageInfoContainer>

            <div>
                {charms.map((c) => {
                    return (
                        <div key={c.id}>
                            {c.name}
                            <UL key={c.id}>
                                {c.effectText.map((e, idx) => {
                                    return <LI key={idx}>{e}</LI>;
                                })}
                            </UL>
                        </div>
                    );
                })}
            </div>

            {/* {charms.map((c) => {
                return <div key={c.id}>{`${c.name}: ${c.effectText}`}</div>;
            })} */}
            <SynergyInfo synergies={synergies} />
            {/* {synergies.map((s, idx) => {
                return <div key={idx}>{s}</div>;
            })} */}
        </>
    );
};
//TODO: display (CHARM IMG) (CHARM IMG) : [synergy text] instead of raw text
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

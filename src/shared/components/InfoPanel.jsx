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

//! max masks: 22
const InfoPanel = () => {
    const { charms } = useCharmContext();
    const { baseNailDamage } = useNailContext();
    const { baseHP } = useHPContext();
    const { baseFireballDamage, baseDiveDamage, baseShriekDamage, hasShadeSoul, hasDescendingDark, hasAbyssShriek } = useSpellsContext();

    const synergies = useMemo(() => {
        return charmSynergies(charms);
    }, [charms]);

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
                <Table>
                    <tr>
                        <TDLabel>Nail Damage: </TDLabel>
                        <TDData>{calculateNailDamage(baseNailDamage, charms)}</TDData>
                    </tr>

                    <tr>
                        <TDLabel>Fireball Damage: </TDLabel>
                        <TDData>{calculateFireballDamage(baseFireballDamage, charms, hasShadeSoul)}</TDData>
                    </tr>
                    <tr>
                        <TDLabel>Dive Damage: </TDLabel>
                        <TDData>{calculateDiveDamage(baseDiveDamage, charms, hasDescendingDark)}</TDData>
                    </tr>
                    <tr>
                        <TDLabel>Yell Damage: </TDLabel>
                        <TDData>{calculateShriekDamage(baseShriekDamage, charms, hasAbyssShriek)}</TDData>
                    </tr>
                </Table>
            </DamageInfoContainer>

            {charms.map((c) => {
                return <div key={c.id}>{`${c.name}: ${c.effectText}`}</div>;
            })}
            <div>SYNERGIES</div>
            {synergies.map((s, idx) => {
                return <div key={idx}>{s}</div>;
            })}
        </>
    );
};

export default InfoPanel;

const DamageInfoContainer = styled("div")((props) => ({
    marginLeft: "25px",
}));

const Table = styled("table")((props) => ({}));

const TDLabel = styled("td")((props) => ({
    textAlign: "right",
}));
const TDData = styled("td")((props) => ({
    textAlign: "left",
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

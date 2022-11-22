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

//TODO: figure out how to handle charm interactions

import React from "react";
import { useCharmContext } from "../context/CharmContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useSpellsContext } from "../context/SpellsContext";
import calculateHP from "../functions/calculateHP";
import calculateNailDamage from "../functions/calculateNailDamage";
import { calculateFireballDamage, calculateDiveDamage, calculateShriekDamage } from "../functions/calculateSpellDamage";

const InfoPanel = () => {
    const { charms } = useCharmContext();
    const { baseNailDamage } = useNailContext();
    const { baseHP } = useHPContext();
    const { baseFireballDamage, baseDiveDamage, baseShriekDamage } = useSpellsContext();

    return (
        <>
            <div>
                HP:{" "}
                {calculateHP(baseHP, charms).map((m, idx) => (
                    <span key={idx}>{m} </span>
                ))}
            </div>
            <div>NAIL DAMAGE: {calculateNailDamage(baseNailDamage, charms)}</div>
            <div>VS/SS DAMAGE: {calculateFireballDamage(baseFireballDamage, charms)}</div>
            <div>DD/DD DAMAGE: {calculateDiveDamage(baseDiveDamage, charms)}</div>
            <div>AS/HW DAMAGE: {calculateShriekDamage(baseShriekDamage, charms)}</div>
            {charms.map((c) => {
                return <div key={c.id}>{c.effectText}</div>;
            })}
        </>
    );
};

export default InfoPanel;

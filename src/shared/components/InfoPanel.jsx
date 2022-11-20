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

//need to figure out how to handle charm interactions

import React from "react";
import { useCharmContext } from "../context/CharmContext";
import { useNailContext } from "../context/NailContext";

const InfoPanel = () => {
    const { charms } = useCharmContext();
    const { nailDamage } = useNailContext();

    return (
        <>
            <div>NAIL DAMAGE: {nailDamage}</div>
            <div>VS/SS DAMAGE</div>
            <div>DD/DD DAMAGE</div>
            <div>AS/HW DAMAGE</div>
            {charms.map((c) => {
                return <div key={c.id}>{c.effectText}</div>;
            })}
        </>
    );
};

export default InfoPanel;

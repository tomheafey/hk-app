import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useCharmContext } from "../context/CharmContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useNotchesContext } from "../context/NotchesContext";
import { useSpellsContext } from "../context/SpellsContext";
import generateHPImageArray from "../functions/calculateHP";
import calculateNailDamage from "../functions/calculateNailDamage";
import { calculateFireballDamage, calculateDiveDamage, calculateShriekDamage } from "../functions/calculateSpellDamage";
import charmSynergies from "../functions/charmSynergies";
import HR from "../styled/HR";
import CharmEffectInfo from "./CharmEffectInfo";
import DamageOutputInfo from "./DamageOutputInfo";
import MaskInfo from "./MaskInfo";
import NotchesInfo from "./NotchesInfo";
import SynergyInfo from "./SynergyInfo";

const InfoPanel = () => {
    const { charms } = useCharmContext();
    const { baseNailDamage } = useNailContext();
    const { baseHP } = useHPContext();
    const { baseFireballDamage, baseDiveDamage, baseShriekDamage, hasShadeSoul, hasDescendingDark, hasAbyssShriek } = useSpellsContext();
    const { notchesArray, isOvercharmed } = useNotchesContext();

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
            <Div>
                <NotchesInfo isOvercharmed={isOvercharmed} notchesArray={notchesArray} />
            </Div>

            <Div>
                <MaskInfo baseHP={baseHP} charms={charms} generateHPImageArray={generateHPImageArray} />
            </Div>
            <HR />
            <Div>
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
            </Div>
            <HR />
            <Div>
                <CharmEffectInfo charms={charms} />
            </Div>
            <HR />
            <Div>
                <SynergyInfo synergies={synergies} />
            </Div>
        </>
    );
};

export default InfoPanel;

const Div = styled("div")((props) => ({
    marginBottom: "5px",
}));

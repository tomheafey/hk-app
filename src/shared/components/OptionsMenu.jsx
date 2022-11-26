//! may want to move this onto an 'intro page' to not clutter the main page

//should DEFAULT everything to 112% completion status
//TODO: break this off into an 'intro' page, set up routing for "/intro" (or whatever) and "/main"

//TODO: create functional components for dropdowns and radio groups
//TODO (maybe): replace option buttons with some kind of prettier MUI component
//TODO (maybe): images of diff nails in nail level dropdown
//TODO (maybe): images of spells for spell toggles

import React, { useEffect, useState } from "react";
import { useCharmContext } from "../context/CharmContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useNotchesContext } from "../context/NotchesContext";
import { useSpellsContext } from "../context/SpellsContext";
import { carefreeMelody, grimmchild, kingsoul, voidHeart } from "../../charmList";
// import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import NailSelector from "./NailSelector";
import MaskSelector from "./MaskSelector";
import NotchSelector from "./NotchSelector";
import ToggleButtonGroup from "./ToggleButtonGroup";

const shadeSoul = require("../images/shade soul.png");
const vengefulSpirit = require("../images/vengeful spirit.png");
const descendingDark = require("../images/descending dark.png");
const desolateDive = require("../images/desolate dive.png");
const abyssShriek = require("../images/abyss shriek.png");
const howlingWraiths = require("../images/howling wraiths.png");

const OptionsMenu = () => {
    const { nailLevel, setNailLevel, baseNailDamage } = useNailContext();
    const { baseHP, setBaseHP } = useHPContext();
    const { charms, removeCharm, addCharm, clearCharms } = useCharmContext();
    const { notchTotal, setNotchTotal } = useNotchesContext();
    const { hasShadeSoul, hasDescendingDark, hasAbyssShriek, baseFireballDamage, baseDiveDamage, baseShriekDamage, setHasShadeSoul, setHasDescendingDark, setHasAbyssShriek } = useSpellsContext();
    const { hasVoidHeart, setHasVoidHeart, hasCarefreeMelody, setHasCarefreeMelody } = useCharmTogglesContext();

    //deal with changing notches total if charms already equipped
    function handleNotchToggle(val) {
        clearCharms();
        setNotchTotal(val);
    }

    //automatically adds void heart if that radio is selected
    useEffect(() => {
        if (hasVoidHeart && !charms.some((c) => c.id === "voidHeart")) {
            addCharm(voidHeart);
        }
    }, [hasVoidHeart]);

    let hpOptions = [];
    for (let i = 9; i >= 5; i--) {
        hpOptions.push({ val: i, label: i.toString() });
    }

    let notchOptions = [];
    for (let i = 11; i >= 3; i--) {
        notchOptions.push({ val: i, label: i.toString() });
    }

    return (
        <>
            {/* <button onClick={(e) => setIsHidden(!isHidden)}>{isHidden ? "unhide" : "hide"} options</button> */}

            <div>
                <NailSelector setNailLevel={setNailLevel} nailLevel={nailLevel} />
                {/* these drop-downs could be func comps */}

                <MaskSelector baseHP={baseHP} setBaseHP={setBaseHP} />

                <NotchSelector notchTotal={notchTotal} handleToggle={handleNotchToggle} />

                <ToggleButtonGroup
                    hasBetterItem={hasShadeSoul}
                    setHasBetterItem={setHasShadeSoul}
                    betterItemName="Shade Soul"
                    betterItemVal="shadeSoul"
                    betterItemPic={shadeSoul}
                    worseItemName="Vengeful Spirit"
                    worseItemVal="vengefulSpirit"
                    worseItemPic={vengefulSpirit}
                    removeCharm={removeCharm}
                />

                <ToggleButtonGroup
                    hasBetterItem={hasDescendingDark}
                    setHasBetterItem={setHasDescendingDark}
                    betterItemName="Descending Dark"
                    betterItemVal="descendingDark"
                    betterItemPic={descendingDark}
                    worseItemName="Desolate Dive"
                    worseItemVal="desolateDive"
                    worseItemPic={desolateDive}
                    removeCharm={removeCharm}
                />

                <ToggleButtonGroup
                    hasBetterItem={hasAbyssShriek}
                    setHasBetterItem={setHasAbyssShriek}
                    betterItemName="Abyss Shriek"
                    betterItemVal="abyssShriek"
                    betterItemPic={abyssShriek}
                    worseItemName="Howling Wraiths"
                    worseItemVal="howlingWraiths"
                    worseItemPic={howlingWraiths}
                    removeCharm={removeCharm}
                />

                <ToggleButtonGroup
                    hasBetterItem={hasCarefreeMelody}
                    setHasBetterItem={setHasCarefreeMelody}
                    betterItemName={carefreeMelody.name}
                    betterItemVal={carefreeMelody.id}
                    betterItemPic={require(`../images/${carefreeMelody.pngName}.png`)}
                    worseItemName={grimmchild.name}
                    worseItemVal={grimmchild.id}
                    worseItemPic={require(`../images/${grimmchild.pngName}.png`)}
                    removeCharm={removeCharm}
                />

                <ToggleButtonGroup
                    hasBetterItem={hasVoidHeart}
                    setHasBetterItem={setHasVoidHeart}
                    betterItemName={voidHeart.name}
                    betterItemVal={voidHeart.id}
                    betterItemPic={require(`../images/${voidHeart.pngName}.png`)}
                    worseItemName={kingsoul.name}
                    worseItemVal={kingsoul.id}
                    worseItemPic={require(`../images/${kingsoul.pngName}.png`)}
                    removeCharm={removeCharm}
                />
            </div>
        </>
    );
};

export default OptionsMenu;

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
// color: "red",
// backgroundColor: "black",
// border: "1px solid white",
// }));

// const StyledToggleButton = styled(ToggleButton)(() => ({
// backgroundColor: "blue",
// color: "red",
// color: "red",
// backgroundColor: "black",
// border: "1px solid white",
// }));

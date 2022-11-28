import React from "react";
import { useCharmContext } from "../context/CharmContext";
import { useCharmTogglesContext } from "../context/CharmTogglesContext";
import { useHPContext } from "../context/HPContext";
import { useNailContext } from "../context/NailContext";
import { useNotchesContext } from "../context/NotchesContext";
import { useSpellsContext } from "../context/SpellsContext";
import { carefreeMelody, grimmchild, kingsoul, voidHeart } from "../../charmList";
import styled from "@emotion/styled";
import NailSelector from "./NailSelector";
import MaskSelector from "./MaskSelector";
import NotchSelector from "./NotchSelector";
import ToggleButtonGroup from "./ToggleButtonGroup";
import HR from "../styled/HR";

const shadeSoul = require("../images/shade soul.png");
const vengefulSpirit = require("../images/vengeful spirit.png");
const descendingDark = require("../images/descending dark.png");
const desolateDive = require("../images/desolate dive.png");
const abyssShriek = require("../images/abyss shriek.png");
const howlingWraiths = require("../images/howling wraiths.png");

const OptionsMenu = () => {
    const { nailLevel, setNailLevel } = useNailContext();
    const { baseHP, setBaseHP } = useHPContext();
    const { charms, removeCharm, addCharm, clearCharms } = useCharmContext();
    const { notchTotal, setNotchTotal } = useNotchesContext();
    const { hasShadeSoul, hasDescendingDark, hasAbyssShriek, setHasShadeSoul, setHasDescendingDark, setHasAbyssShriek } = useSpellsContext();
    const { hasVoidHeart, setHasVoidHeart, hasCarefreeMelody, setHasCarefreeMelody } = useCharmTogglesContext();

    //deal with changing notches total if charms already equipped
    function handleNotchToggle(val) {
        clearCharms();
        setNotchTotal(val);
    }

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
            <Div>
                <NailSelector nailLevel={nailLevel} setNailLevel={setNailLevel} />

                <HR />

                <MaskSelector baseHP={baseHP} setBaseHP={setBaseHP} />

                <HR />

                <NotchSelector notchTotal={notchTotal} handleToggle={handleNotchToggle} />

                <HR />

                <div>Choose Spells</div>
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
                <HR />
                <div>Choose Charms</div>
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
            </Div>
        </>
    );
};

export default OptionsMenu;

const Div = styled("div")(() => ({
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
}));
